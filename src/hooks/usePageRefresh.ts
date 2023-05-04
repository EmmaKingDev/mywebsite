import { useCallback } from 'react';

export function usePageRefresh() {
  const refreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  return refreshPage;
}