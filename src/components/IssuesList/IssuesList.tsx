import { IssueItem, Search } from 'components';
import * as React from 'react';
import { useQuery } from 'react-query';
import { Issue, Label, Status } from 'types';
import { API } from 'config';
import { Box, CircularProgress } from '@mui/material';

type IssuesListProps = {
  labels: Label[];
  status: Status | null;
};

export default function IssuesList({ labels, status }: IssuesListProps) {
  const issuesQuery = useQuery(['issues', { labels, status }], () => {
    const statusParams = status ? `&status=${status}` : '';
    const labelsParams = labels
      .map((label) => `labels[]=${label.id}`)
      .join('&');
    return fetch(`${API.issues}?${labelsParams}${statusParams}`).then(
      (response) => response.json()
    );
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Search />
      {issuesQuery.isLoading && (
        <CircularProgress sx={{ alignSelf: 'center' }} />
      )}
      {!issuesQuery.isLoading && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {issuesQuery.data?.map((issue: Issue) => (
            <IssueItem key={issue.id} {...issue} />
          ))}
        </Box>
      )}
    </Box>
  );
}
