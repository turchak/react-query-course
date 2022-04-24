import { useQuery } from 'react-query';
import { API } from 'config';
import { IssueComment } from 'types';

export function useIssueComments(id: string) {
  const fetchIssueComments = (id: string): Promise<IssueComment[]> => {
    return fetch(API.comments(id)).then((response) => response.json());
  };
  return useQuery(['issues', id, 'comments'], () => fetchIssueComments(id));
}
