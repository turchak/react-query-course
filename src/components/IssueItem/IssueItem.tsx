import * as React from 'react';
import { Paper, Typography, Box, Stack, Chip } from '@mui/material';
import { Issue, Status } from 'types';
import {
  BatteryUnknown as BacklogIcon,
  BatteryStd as DoneIcon,
  BatteryAlert as CancelledIcon,
  Battery4Bar as InProgressIcon,
  Battery0Bar as TodoIcon,
} from '@mui/icons-material';

type IssueItemProps = Issue;

const statusIcon: { [key in Status]: React.ReactNode } = {
  backlog: <BacklogIcon />,
  done: <DoneIcon />,
  cancelled: <CancelledIcon />,
  inProgress: <InProgressIcon />,
  todo: <TodoIcon />,
};

export default function IssueItem({
  status,
  title,
  number,
  createdDate,
  createdBy,
  labels,
}: IssueItemProps) {
  return (
    <Box>
      <Paper elevation={0} sx={{ display: 'flex', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>{statusIcon[status]}</Box>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="subtitle1">{title}</Typography>
              <Stack direction="row" spacing={1}>
                {labels.map((label) => (
                  <Chip label={label} />
                ))}
              </Stack>
            </Box>

            <Typography>{number}</Typography>
            <Typography>{createdDate}</Typography>
            <Typography>{createdBy}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
