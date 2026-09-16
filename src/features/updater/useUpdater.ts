import { useState, useEffect, useCallback } from 'react';
import type { UpdateProgress, UpdateStateData } from './updater.types';

export function useUpdater() {
  const [updateState, setUpdateState] = useState<UpdateStateData | null>(null);
  const [progress, setProgress] = useState<UpdateProgress | null>(null);

  useEffect(() => {
    const updater = (window as any).updaterAPI;
    const electron = (window as any).electronAPI;

    if (updater) {
      const unsubStatus = updater.onStatusChange((data: UpdateStateData) => {
        setUpdateState(data);
      });
      const unsubProgress = updater.onProgress((data: UpdateProgress) => {
        setProgress(data);
      });
      return () => {
        unsubStatus?.();
        unsubProgress?.();
      };
    }

    if (electron?.onUpdateDownloaded) {
      electron.onUpdateDownloaded((info: any) => {
        setUpdateState({ status: 'downloaded', info });
      });
    }
  }, []);

  const checkForUpdates = useCallback(async () => {
    const updater = (window as any).updaterAPI;
    if (!updater) return;
    setUpdateState({ status: 'checking' });
    try {
      await updater.checkForUpdates();
    } catch (e: any) {
      setUpdateState({ status: 'error', error: e?.message ?? String(e) });
    }
  }, []);

  const startDownload = useCallback(async () => {
    const updater = (window as any).updaterAPI;
    if (!updater) return;
    setUpdateState((prev) => ({ status: 'downloading', info: prev?.info }));
    try {
      await updater.startDownload();
    } catch (e: any) {
      setUpdateState((prev) => ({
        status: 'error',
        error: e?.message ?? String(e),
        info: prev?.info,
      }));
    }
  }, []);

  const installNow = useCallback(() => {
    const updater = (window as any).updaterAPI;
    const electron = (window as any).electronAPI;

    if (updater) {
      updater.install();
    } else if (electron?.installUpdate) {
      electron.installUpdate();
    }
  }, []);

  const dismiss = useCallback(() => {
    setUpdateState(null);
  }, []);

  return {
    updateState,
    progress,
    checkForUpdates,
    startDownload,
    installNow,
    dismiss,
  };
}
