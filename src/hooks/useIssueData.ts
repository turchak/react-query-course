import { useQuery } from '@tanstack/react-query';
import { Issue } from 'types';
import { api, requestPaths } from '../services';

export function useIssueData(id: string) {
  const fetchIssueData = (id: string): Promise<Issue> => {
    return api.get(requestPaths.issue(id));
  };
  return useQuery(['issue', id], () => fetchIssueData(id));
}
