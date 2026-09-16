export interface UpdateProgress {
  percent: number;
  bytesPerSecond: number;
  transferred: number;
  total: number;
}

export type UpdateStatus =
  | 'idle'
  | 'checking'
  | 'available'
  | 'not-available'
  | 'downloading'
  | 'downloaded'
  | 'error';

export interface UpdateInfo {
  version: string;
  releaseDate?: string;
  releaseNotes?: string;
  files?: Array<{ size?: number; url?: string }>;
}

export interface UpdateStateData {
  status: UpdateStatus;
  info?: UpdateInfo;
  error?: string;
}
