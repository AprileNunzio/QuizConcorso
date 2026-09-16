import { databaseRepo } from '../features/database';
import type { ConcorsoIndex, ConcorsoManifest, Question, QuestionLevel } from '../features/database';

export type { QuestionLevel };

export const fetchConcorsiIndex = (): Promise<ConcorsoIndex[]> => {
  return databaseRepo.getConcorsi();
};

export const fetchConcorsoManifest = (concorsoId: string): Promise<ConcorsoManifest> => {
  return databaseRepo.getConcorso(concorsoId);
};

export const filterQuestionsByLevel = (questions: Question[], level?: QuestionLevel | 'all'): Question[] => {
  return databaseRepo.filterByLevel(questions, level);
};

export const countByLevel = (questions: Question[]): Record<QuestionLevel, number> => {
  const counts: Record<QuestionLevel, number> = { base: 0, intermedio: 0, avanzato: 0 };
  for (const q of questions) counts[q.level as QuestionLevel]++;
  return counts;
};

export const fetchQuestionsFromSources = (sources: string[]): Promise<Question[]> => {
  return databaseRepo.getQuestionsBySources(sources);
};

export const fetchAllGlobalModules = (): Promise<any[]> => {
  return databaseRepo.getAllGlobalModules();
};

export const fetchAllQuestions = (): Promise<Question[]> => {
  return databaseRepo.getAllQuestions();
};
