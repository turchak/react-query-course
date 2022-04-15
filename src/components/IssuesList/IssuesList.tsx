import { IssueItem } from 'components';
import * as React from 'react';
import { useQuery } from 'react-query';
import { Issue } from 'types';
import { API } from 'config';
import { Typography, Box, CircularProgress } from '@mui/material';

export default function IssuesList() {
  const issuesQuery = useQuery(['issues'], () =>
    fetch(API.issues).then((response) => response.json())
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6">Issues list</Typography>
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
