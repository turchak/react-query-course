import { useQuery } from 'react-query';
import { API } from 'config';
import { Issue } from 'types';

type SearchResponse = {
  count: number;
  items: Issue[];
};

export function useSearch(search: string) {
  const fetchSearch = async (search: string): Promise<SearchResponse> => {
    const response = await fetch(API.search(search));
    return await response.json();
  };
  return useQuery(['issues', 'search', search], () => fetchSearch(search), {
    enabled: !!search,
  });
}
