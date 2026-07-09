export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
  correctAnswerId: string;
  explanation: string;
  hint?: string;
  imageUrl?: string;
  level: 'base' | 'intermedio' | 'avanzato';
}

export interface ConcorsoManifest {
  concorso_id: string;
  titolo: string;
  moduli_esame: ModuloEsame[];
}

export interface ModuloEsame {
  modulo_id: string;
  modulo_titolo: string;
  descrizione: string;
  icona: string;
  sorgenti_dati: string[];
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

export interface QuizConfig {
  mode: 'study' | 'quiz_free' | 'quiz_timed';
  timeLimitMinutes?: number;
  questionLimit?: number;
  subjectName?: string;
  level?: 'base' | 'intermedio' | 'avanzato' | 'all';
}
