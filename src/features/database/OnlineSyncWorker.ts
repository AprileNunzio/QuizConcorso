import { dbClient } from './IndexedDbClient';
import type { ConcorsoIndex, ConcorsoManifest, SyncMetadata } from './db.types';

const REMOTE_BASE = 'https://raw.githubusercontent.com/AprileNunzio/QuizConcorso/main/public/db/';
const SYNC_TIMEOUT_MS = 7000;

export interface SyncProgress {
  step: string;
  current: number;
  total: number;
  message: string;
}

export interface SyncOptions {
  forceAntiCache?: boolean;
}

export class OnlineSyncWorker {
  private active = false;

  private async fetchRemote(url: string, antiCache = true): Promise<Response> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), SYNC_TIMEOUT_MS);
    const nonce = antiCache ? `&_t=${Date.now()}&_nonce=${Math.random().toString(36).slice(2)}` : '';
    const fullUrl = url.includes('?') ? `${url}${nonce}` : `${url}?${nonce.slice(1)}`;

    try {
      return await fetch(fullUrl, {
        signal: controller.signal,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
      });
    } finally {
      clearTimeout(id);
    }
  }

  async runSync(
    onProgress?: (p: SyncProgress) => void,
    options?: SyncOptions
  ): Promise<{ success: boolean; totalQuestions: number; error?: string }> {
    if (this.active) {
      return { success: false, totalQuestions: 0, error: 'SYNC_ALREADY_RUNNING' };
    }

    this.active = true;
    try {
      onProgress?.({ step: 'manifest', current: 5, total: 100, message: 'Verifica manifesto online anti-cache...' });

      const mRes = await this.fetchRemote(`${REMOTE_BASE}manifest.json`, true);
      if (!mRes.ok) throw new Error(`REMOTE_MANIFEST_${mRes.status}`);

      const remoteIndex: ConcorsoIndex[] = await mRes.json();
      await dbClient.set('key_value', 'manifest', remoteIndex);

      const sourcesSet = new Set<string>();

      for (let i = 0; i < remoteIndex.length; i++) {
        const item = remoteIndex[i];
        try {
          const cRes = await this.fetchRemote(`${REMOTE_BASE}concorsi/${item.id}.json`, true);
          if (cRes.ok) {
            const manifest: ConcorsoManifest = await cRes.json();
            await dbClient.set('concorsi', item.id, manifest);
            for (const mod of manifest.moduli_esame) {
              for (const src of mod.sorgenti_dati) {
                sourcesSet.add(src);
              }
            }
          }
        } catch {
          continue;
        }
      }

      const sources = Array.from(sourcesSet);
      let totalQuestions = 0;

      for (let i = 0; i < sources.length; i++) {
        const src = sources[i];
        const pct = 15 + Math.round(((i + 1) / sources.length) * 80);
        onProgress?.({
          step: 'questions',
          current: pct,
          total: 100,
          message: `Aggiornamento anti-cache: ${src.split('/').pop()} (${i + 1}/${sources.length})`,
        });

        try {
          const qRes = await this.fetchRemote(`${REMOTE_BASE}master_bank/${src}`, true);
          if (qRes.ok) {
            const questions = await qRes.json();
            if (Array.isArray(questions)) {
              totalQuestions += questions.length;
              await dbClient.set('question_banks', src, questions);
            }
          }
        } catch {
          continue;
        }
      }

      const meta: SyncMetadata = {
        lastSyncTimestamp: Date.now(),
        lastCheckTimestamp: Date.now(),
        totalQuestions,
        concorsiCount: remoteIndex.length,
      };
      await dbClient.setMetadata(meta);

      onProgress?.({ step: 'done', current: 100, total: 100, message: `Database online sincronizzato con successo (${totalQuestions} quesiti)!` });
      return { success: true, totalQuestions };
    } catch (e) {
      const err = e instanceof Error ? e.message : String(e);
      return { success: false, totalQuestions: 0, error: err };
    } finally {
      this.active = false;
    }
  }

  async clearLocalCache(): Promise<void> {
    await dbClient.clearStore('question_banks');
    await dbClient.clearStore('concorsi');
  }

  async getMetadata(): Promise<SyncMetadata | null> {
    return await dbClient.getMetadata();
  }

  isRunning(): boolean {
    return this.active;
  }
}

export const syncWorker = new OnlineSyncWorker();
