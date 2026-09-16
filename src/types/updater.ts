export interface UpdateProgress {
  percent: number;
  bytesPerSecond: number;
  transferred: number;
  total: number;
}

export type UpdateState =
  | 'idle'
  | 'checking'
  | 'available'
  | 'not-available'
  | 'downloading'
  | 'downloaded'
  | 'error';

export interface UpdateStatusData {
  status: UpdateState;
  info?: {
    version: string;
    releaseDate?: string;
    releaseNotes?: string;
    files?: Array<{ size?: number; url?: string }>;
  };
  error?: string;
}

export interface SyncStatusData {
  isSyncing: boolean;
  lastSyncTime: number | null;
  totalQuestions: number;
  statusMessage: string;
  error?: string;
}
