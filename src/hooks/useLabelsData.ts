import { useQuery } from 'react-query';
import { API } from 'config';
import { Label } from 'types';

export function useLabelsData() {
  const getLabels = (): Promise<Label[]> => {
    return fetch(API.labels).then((response) => response.json());
  };
  return useQuery<Label[]>(['labels'], getLabels);
}
