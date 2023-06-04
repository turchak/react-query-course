import { useQuery } from '@tanstack/react-query';
import { Issue } from 'types';
import { api, requestPaths } from '../services';

type SearchResponse = {
  count: number;
  items: Issue[];
};

export function useSearch(search: string) {
  const fetchSearch = async (search: string): Promise<SearchResponse> => {
    return await api.get(requestPaths.search, { params: { q: search } });
  };

  return useQuery(['issues', 'search', search], () => fetchSearch(search), {
    enabled: !!search,
  });
}
