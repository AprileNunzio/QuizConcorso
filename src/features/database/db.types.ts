export interface Option {
  id: string;
  text: string;
}

export type QuestionLevel = 'base' | 'intermedio' | 'avanzato';

export type DifficultyProfileMode = 'official' | 'base' | 'intermedio' | 'avanzato' | 'all';

export interface DifficultyDistribution {
  base: number;
  intermedio: number;
  avanzato: number;
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
  correctAnswerId: string;
  explanation: string;
  hint?: string;
  imageUrl?: string;
  level: QuestionLevel;
  category?: string;
}

export interface ConcorsoIndex {
  id: string;
  title: string;
  description: string;
  icon: string;
  ente?: string;
  posti_disponibili?: string;
  durata_prova_minuti?: number;
  numero_quesiti?: number;
}

export interface ModuloEsame {
  modulo_id: string;
  modulo_titolo: string;
  descrizione: string;
  icona: string;
  sorgenti_dati: string[];
  livello_default?: QuestionLevel | 'all';
  distribuzione_default?: DifficultyDistribution;
}

export interface SedePosti {
  sede: string;
  posti: number;
}

export interface ProvaEsame {
  tipo: string;
  durataMinuti: number;
  numeroQuesiti: number;
  punteggioMinimo: string;
  modalitaSvolgimento?: string;
}

export interface BandoDettagli {
  fonte?: string;
  ente: string;
  numeroPosti: number;
  postiPerSede?: SedePosti[];
  terminePresentazione?: string;
  requisiti?: string[];
  prova?: ProvaEsame;
  materieEsame?: string[];
  graduatoria?: {
    validita?: string;
    note?: string;
  };
  assunzione?: {
    tipoContratto?: string;
    periodoProva?: string;
    inquadramento?: string;
    retribuzione?: string;
  };
  noteAggiuntive?: string[];
}

export interface ConcorsoManifest {
  concorso_id: string;
  titolo: string;
  moduli_esame: ModuloEsame[];
  bando?: BandoDettagli;
}

export interface SyncMetadata {
  lastSyncTimestamp: number;
  lastCheckTimestamp: number;
  totalQuestions: number;
  concorsiCount: number;
  versionTag?: string;
}

export interface QuizConfig {
  mode: 'study' | 'quiz_free' | 'quiz_timed';
  timeLimitMinutes?: number;
  questionLimit?: number;
  subjectName?: string;
  level?: QuestionLevel | 'all';
  concorsoId?: string;
  concorsoTitle?: string;
  difficultyProfile?: DifficultyProfileMode;
}

export interface DatabaseOverview {
  totalQuestions: number;
  totalConcorsi: number;
  bySubject: Record<string, number>;
  byLevel: { base: number; intermedio: number; avanzato: number };
  concorsi: Array<{
    id: string;
    titolo: string;
    ente: string;
    posti: string;
    totaleDomande: number;
    moduliCount: number;
  }>;
  lastSyncDate: string | null;
}
