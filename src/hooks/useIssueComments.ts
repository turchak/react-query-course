import { useQuery } from '@tanstack/react-query';
import { IssueComment } from 'types';
import { api, requestPaths } from 'services';

export function useIssueComments(id: string) {
  const fetchIssueComments = async (id: string) => {
    return api.get<IssueComment[]>(requestPaths.comments(id));
  };
  return useQuery(['issues', id, 'comments'], () => fetchIssueComments(id));
}
