import * as React from 'react';
import { IssuesList, LabelList, StatusSelect } from 'components';
import { Page } from 'layouts';
import { Box, Typography } from '@mui/material';
import { Label, Status } from 'types';

export default function Issues() {
  const [labels, setLabels] = React.useState<Label[]>([]);
  const [status, setStatus] = React.useState<Status | null>(null);
  return (
    <Page>
      <Typography variant="h4">Issues</Typography>
      <Box sx={{ display: 'flex', paddingTop: 4, gap: 4 }}>
        <Box>
          <IssuesList labels={labels} status={status} />
        </Box>
        <Box>
          <LabelList labels={labels} setLabels={setLabels} />
          <StatusSelect status={status} setStatus={setStatus} />
        </Box>
      </Box>
    </Page>
  );
}
