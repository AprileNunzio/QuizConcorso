import type { SyncMetadata } from './db.types';

const DB_NAME = 'QuizConcorso_DB';
const DB_VERSION = 1;
const TIMEOUT_MS = 1200;

class IndexedDbClient {
  private dbPromise: Promise<IDBDatabase> | null = null;

  private withTimeout<T>(promise: Promise<T>, fallback: T): Promise<T> {
    const timeout = new Promise<T>((resolve) => {
      setTimeout(() => resolve(fallback), TIMEOUT_MS);
    });
    return Promise.race([promise, timeout]);
  }

  private open(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        reject(new Error('INDEXEDDB_UNAVAILABLE'));
        return;
      }

      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('key_value')) {
          db.createObjectStore('key_value');
        }
        if (!db.objectStoreNames.contains('concorsi')) {
          db.createObjectStore('concorsi');
        }
        if (!db.objectStoreNames.contains('question_banks')) {
          db.createObjectStore('question_banks');
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    return this.dbPromise;
  }

  async get<T>(storeName: 'key_value' | 'concorsi' | 'question_banks', key: string): Promise<T | null> {
    return this.withTimeout(
      (async () => {
        try {
          const db = await this.open();
          return await new Promise<T | null>((resolve, reject) => {
            const tx = db.transaction(storeName, 'readonly');
            const store = tx.objectStore(storeName);
            const req = store.get(key);
            req.onsuccess = () => resolve(req.result ?? null);
            req.onerror = () => reject(req.error);
          });
        } catch {
          return null;
        }
      })(),
      null
    );
  }

  async set<T>(storeName: 'key_value' | 'concorsi' | 'question_banks', key: string, value: T): Promise<void> {
    return this.withTimeout(
      (async () => {
        try {
          const db = await this.open();
          await new Promise<void>((resolve, reject) => {
            const tx = db.transaction(storeName, 'readwrite');
            const store = tx.objectStore(storeName);
            const req = store.put(value, key);
            req.onsuccess = () => resolve();
            req.onerror = () => reject(req.error);
          });
        } catch {
          return;
        }
      })(),
      undefined
    );
  }

  async getMetadata(): Promise<SyncMetadata | null> {
    return this.get<SyncMetadata>('key_value', 'sync_metadata');
  }

  async setMetadata(meta: SyncMetadata): Promise<void> {
    return this.set<SyncMetadata>('key_value', 'sync_metadata', meta);
  }
}

export const dbClient = new IndexedDbClient();
