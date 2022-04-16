import * as React from 'react';
import { IssuesList, LabelList } from 'components';
import { Page } from 'layouts';
import { Box, Typography } from '@mui/material';
import { Label } from 'types';

export default function Issues() {
  const [labels, setLabels] = React.useState<Label[]>([]);
  return (
    <Page>
      <Typography variant="h4">Issues</Typography>
      <Box sx={{ display: 'flex', paddingTop: 4, gap: 4 }}>
        <Box>
          <IssuesList labels={labels} />
        </Box>
        <Box>
          <LabelList selected={labels} setSelected={setLabels} />
        </Box>
      </Box>
    </Page>
  );
}
