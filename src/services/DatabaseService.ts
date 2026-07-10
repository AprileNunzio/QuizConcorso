import type { ConcorsoIndex, ConcorsoManifest, Question } from "../types";
import { deriveCategory } from "../utils/categorize";

/**
 * Absolute paths (starting with "/") resolve against the filesystem root
 * when the packaged Electron app loads index.html via file://, not against
 * the app folder. Every Master Bank fetch must therefore be resolved
 * against Vite's configured BASE_URL, which stays correct in dev (http),
 * `vite preview`, and the file:// context of the installed app alike.
 */
const DB_BASE = `${import.meta.env.BASE_URL}db/`;

export const fetchConcorsiIndex = async (): Promise<ConcorsoIndex[]> => {
  try {
    const response = await fetch(`${DB_BASE}manifest.json`);
    if (!response.ok) throw new Error("Errore nel caricamento del manifesto concorsi");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchConcorsoManifest = async (concorsoId: string): Promise<ConcorsoManifest> => {
  try {
    const response = await fetch(`${DB_BASE}concorsi/${concorsoId}.json`);
    if (!response.ok) throw new Error(`Errore nel caricamento del concorso ${concorsoId}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Some Master Bank JSON files store the question prompt under "question",
 * others (mostly the placeholder templates) under "text". Normalizing here
 * guarantees the UI always has a populated `question` field regardless of
 * which key the source file happens to use. Questions without an explicit
 * difficulty `level` default to 'base' so level filtering never breaks on
 * older/un-tagged content.
 */
const normalizeQuestion = (raw: any, category?: string): Question => ({
  ...raw,
  question: raw.question ?? raw.text ?? '',
  level: raw.level === 'intermedio' || raw.level === 'avanzato' ? raw.level : 'base',
  category: raw.category ?? category,
});

export type QuestionLevel = 'base' | 'intermedio' | 'avanzato';

/** Filters a question pool by difficulty level. `undefined`/'all' returns the pool untouched. */
export const filterQuestionsByLevel = (questions: Question[], level?: QuestionLevel | 'all'): Question[] => {
  if (!level || level === 'all') return questions;
  return questions.filter((q) => q.level === level);
};

/** Counts how many questions in the pool fall into each difficulty level. */
export const countByLevel = (questions: Question[]): Record<QuestionLevel, number> => {
  const counts: Record<QuestionLevel, number> = { base: 0, intermedio: 0, avanzato: 0 };
  for (const q of questions) counts[q.level as QuestionLevel]++;
  return counts;
};

export const fetchQuestionsFromSources = async (sources: string[]): Promise<Question[]> => {
  try {
    const fetchPromises = sources.map(source =>
      fetch(`${DB_BASE}master_bank/${source}`).then(res => {
        if (!res.ok) throw new Error(`Errore fetch su ${source}`);
        return res.json();
      }).then((raw: any[]) => {
        const category = deriveCategory([source]);
        return raw.map((q) => normalizeQuestion(q, category));
      })
    );
    const results = await Promise.all(fetchPromises);

    // Unisci tutti gli array di domande in un unico array
    return results.flat();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchAllGlobalModules = async (): Promise<any[]> => {
  try {
    const concorsi = await fetchConcorsiIndex();
    const allModules = [];
    const seen = new Set<string>();

    for (const concorso of concorsi) {
      const manifest = await fetchConcorsoManifest(concorso.id);
      for (const modulo of manifest.moduli_esame) {
        if (!seen.has(modulo.modulo_titolo)) {
          seen.add(modulo.modulo_titolo);
          allModules.push(modulo);
        }
      }
    }
    return allModules;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Fetches every question across every module in the Master Bank, deduplicated by id.
 * Used to build the cross-subject "Ripasso Intelligente" (smart review) pool.
 */
export const fetchAllQuestions = async (): Promise<Question[]> => {
  try {
    const modules = await fetchAllGlobalModules();
    const allSources = Array.from(new Set(modules.flatMap((m) => m.sorgenti_dati as string[])));
    const questions = await fetchQuestionsFromSources(allSources);
    const seen = new Set<string>();
    return questions.filter((q) => {
      if (seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};
