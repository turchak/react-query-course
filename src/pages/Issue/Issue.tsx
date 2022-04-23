import * as React from 'react';
import { Page } from 'layouts';
import { useParams } from 'react-router';
import { useIssueData } from 'hooks';
import { Box, CircularProgress } from '@mui/material';
import { IssueHeader } from 'components';

export default function Issue() {
  const { id = '' } = useParams<{ id: string }>();

  const issueQuery = useIssueData(id);

  return (
    <Page>
      {issueQuery.isLoading && <CircularProgress size={10} />}
      {issueQuery.isSuccess && (
        <Box>
          <IssueHeader {...issueQuery.data} />
          {issueQuery.data.number}
        </Box>
      )}
    </Page>
  );
}
