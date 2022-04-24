import { useQuery } from 'react-query';
import { API } from 'config';
import { Issue } from 'types';

export function useIssueData(id: string) {
  const fetchIssueData = (id: string): Promise<Issue> => {
    return fetch(API.issue(id)).then((response) => response.json());
  };
  return useQuery(['issue', id], () => fetchIssueData(id));
}
