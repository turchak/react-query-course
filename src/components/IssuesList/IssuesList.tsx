// import { IssueItem } from 'components';
import * as React from 'react';
import { useQuery } from 'react-query';
// import { Issue } from 'types';
import { API } from 'config';
import { Skeleton, Typography, Box } from '@mui/material';
import { IssueItem } from '../IssueItem';

export default function IssuesList() {
  const issuesQuery = useQuery(['issues'], () =>
    fetch(API.ISSUES).then((response) => response.json())
  );

  return (
    <Box>
      <Typography variant="h6">Issues list</Typography>
      {!issuesQuery.isLoading && (
        <Skeleton>
          <IssueItem />
        </Skeleton>
      )}
      {/*{issuesQuery.isLoading && (*/}
      {/*  <ul>*/}
      {/*    {issuesQuery.data?.map((issue: Issue) => (*/}
      {/*      <IssueItem key={issue.id} {...issue} />*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*)}*/}
    </Box>
  );
}
