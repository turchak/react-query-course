import { useQuery } from '@tanstack/react-query';
import { Issue, Label, Status } from 'types';
import { api, requestPaths } from 'services';

type IssuesData = {
  labels: Label[];
  status: Status | null;
};

export function useIssuesData({ labels, status }: IssuesData) {
  const fetchIssues = async (): Promise<Issue[]> => {
    return await api.get(requestPaths.issues);
  };

  return useQuery(['issues', { labels, status }], fetchIssues);
}
