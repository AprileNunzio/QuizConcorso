import type { ConcorsoIndex, ConcorsoManifest, Question, QuestionLevel, DatabaseOverview, SyncMetadata } from './db.types';
import { dbClient } from './IndexedDbClient';
import { deriveCategory } from '../../utils/categorize';

const STATIC_BASE = `${import.meta.env.BASE_URL}db/`;

const normalizeQuestion = (raw: any, category?: string): Question => ({
  ...raw,
  question: raw.question ?? raw.text ?? '',
  level: raw.level === 'intermedio' || raw.level === 'avanzato' ? raw.level : 'base',
  category: raw.category ?? category,
});

export class DatabaseRepository {
  private memoryCache = new Map<string, any>();

  async getConcorsi(): Promise<ConcorsoIndex[]> {
    if (this.memoryCache.has('manifest')) {
      return this.memoryCache.get('manifest');
    }

    const cached = await dbClient.get<ConcorsoIndex[]>('key_value', 'manifest');
    if (cached && Array.isArray(cached) && cached.length > 0) {
      this.memoryCache.set('manifest', cached);
      return cached;
    }

    const res = await fetch(`${STATIC_BASE}manifest.json`);
    if (!res.ok) {
      throw new Error(`MANIFEST_FETCH_ERROR_${res.status}`);
    }
    const data: ConcorsoIndex[] = await res.json();
    this.memoryCache.set('manifest', data);
    dbClient.set('key_value', 'manifest', data);
    return data;
  }

  async getConcorso(concorsoId: string): Promise<ConcorsoManifest> {
    const memKey = `concorso_${concorsoId}`;
    if (this.memoryCache.has(memKey)) {
      return this.memoryCache.get(memKey);
    }

    const cached = await dbClient.get<ConcorsoManifest>('concorsi', concorsoId);
    if (cached && cached.concorso_id === concorsoId) {
      this.memoryCache.set(memKey, cached);
      return cached;
    }

    const res = await fetch(`${STATIC_BASE}concorsi/${concorsoId}.json`);
    if (!res.ok) {
      throw new Error(`CONCORSO_FETCH_ERROR_${concorsoId}`);
    }
    const data: ConcorsoManifest = await res.json();
    this.memoryCache.set(memKey, data);
    dbClient.set('concorsi', concorsoId, data);
    return data;
  }

  async getQuestionsBySources(sources: string[]): Promise<Question[]> {
    const list = await Promise.all(
      sources.map(async (src) => {
        const category = deriveCategory([src]);
        if (this.memoryCache.has(src)) {
          const raw = this.memoryCache.get(src);
          return raw.map((q: any) => normalizeQuestion(q, category));
        }

        const cached = await dbClient.get<any[]>('question_banks', src);
        if (cached && Array.isArray(cached) && cached.length > 0) {
          this.memoryCache.set(src, cached);
          return cached.map((q) => normalizeQuestion(q, category));
        }

        const res = await fetch(`${STATIC_BASE}master_bank/${src}`);
        if (!res.ok) return [];
        const raw = await res.json();
        if (Array.isArray(raw)) {
          this.memoryCache.set(src, raw);
          dbClient.set('question_banks', src, raw);
          return raw.map((q) => normalizeQuestion(q, category));
        }
        return [];
      })
    );
    return list.flat();
  }

  async getAllGlobalModules(): Promise<any[]> {
    const concorsi = await this.getConcorsi();
    const modules: any[] = [];
    const seen = new Set<string>();

    for (const c of concorsi) {
      try {
        const manifest = await this.getConcorso(c.id);
        for (const m of manifest.moduli_esame) {
          if (!seen.has(m.modulo_titolo)) {
            seen.add(m.modulo_titolo);
            modules.push(m);
          }
        }
      } catch {
        continue;
      }
    }
    return modules;
  }

  async getAllQuestions(): Promise<Question[]> {
    const modules = await this.getAllGlobalModules();
    const sources = Array.from(new Set(modules.flatMap((m) => m.sorgenti_dati as string[])));
    const questions = await this.getQuestionsBySources(sources);
    const seen = new Set<string>();
    return questions.filter((q) => {
      if (seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
  }

  filterByLevel(questions: Question[], level?: QuestionLevel | 'all'): Question[] {
    if (!level || level === 'all') return questions;
    return questions.filter((q) => q.level === level);
  }

  async getDatabaseOverview(): Promise<DatabaseOverview> {
    const concorsi = await this.getConcorsi();
    const concorsiDetails = [];
    const allQuestionsMap = new Map<string, Question>();
    const bySubject: Record<string, number> = {};
    const byLevel = { base: 0, intermedio: 0, avanzato: 0 };

    for (const c of concorsi) {
      try {
        const manifest = await this.getConcorso(c.id);
        const sources = Array.from(new Set(manifest.moduli_esame.flatMap((m) => m.sorgenti_dati)));
        const questions = await this.getQuestionsBySources(sources);
        const uniqueInConcorso = new Set<string>();
        for (const q of questions) {
          uniqueInConcorso.add(q.id);
          if (!allQuestionsMap.has(q.id)) {
            allQuestionsMap.set(q.id, q);
            const cat = q.category || 'Generale';
            bySubject[cat] = (bySubject[cat] || 0) + 1;
            if (q.level === 'avanzato') byLevel.avanzato++;
            else if (q.level === 'intermedio') byLevel.intermedio++;
            else byLevel.base++;
          }
        }
        concorsiDetails.push({
          id: c.id,
          titolo: c.title,
          ente: c.ente || 'Ente Pubblico',
          posti: c.posti_disponibili || 'Bando Ufficiale',
          totaleDomande: uniqueInConcorso.size,
          moduliCount: manifest.moduli_esame.length,
        });
      } catch {
        continue;
      }
    }

    const syncMeta = await dbClient.get<SyncMetadata>('key_value', 'sync_metadata');
    const lastSyncDate = syncMeta?.lastSyncTimestamp
      ? new Date(syncMeta.lastSyncTimestamp).toLocaleString('it-IT')
      : null;

    return {
      totalQuestions: allQuestionsMap.size,
      totalConcorsi: concorsi.length,
      bySubject,
      byLevel,
      concorsi: concorsiDetails,
      lastSyncDate,
    };
  }
}

export const databaseRepo = new DatabaseRepository();
