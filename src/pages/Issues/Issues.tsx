import * as React from 'react';
import { IssuesList } from 'components';
import { Page } from 'layouts';
import { Box, Typography } from '@mui/material';

export default function Issues() {
  return (
    <Page>
      <Box>
        <Typography variant="h4">Issues</Typography>
        <IssuesList />
      </Box>
      <aside>LabelList</aside>
    </Page>
  );
}
