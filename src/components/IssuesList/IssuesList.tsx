import { IssueItem } from 'components';
import * as React from 'react';
import { useQuery } from 'react-query';
import { Issue, Label } from 'types';
import { API } from 'config';
import { Box, CircularProgress } from '@mui/material';

type IssuesListProps = {
  labels: Label[];
};

export default function IssuesList({ labels }: IssuesListProps) {
  const issuesQuery = useQuery(['issues', { labels }], () => {
    const params = labels.map((label) => `labels[]=${label.id}`).join('&');
    console.log(params);
    return fetch(`${API.issues}?${params}`).then((response) => response.json());
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
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
