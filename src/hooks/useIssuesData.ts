import { API } from 'config';
import { useQuery } from 'react-query';
import { Label, Status } from 'types';

type IssuesData = {
  labels: Label[];
  status: Status | null;
};

export function useIssuesData({ labels, status }: IssuesData) {
  return useQuery(['issues', { labels, status }], async () => {
    const statusParams = status ? `&status=${status}` : '';
    const labelsParams = labels
      .map((label) => `labels[]=${label.id}`)
      .join('&');
    const response = await fetch(
      `${API.issues}?${labelsParams}${statusParams}`
    );
    return await response.json();
  });
}
