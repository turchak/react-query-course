import { useQuery } from '@tanstack/react-query';
import { Label } from 'types';
import { api, requestPaths } from 'services';

export function useLabelsData() {
  const fetchLabels = async (): Promise<Label[]> => {
    return await api.get(requestPaths.labels);
  };

  return useQuery(['labels'], fetchLabels);
}
