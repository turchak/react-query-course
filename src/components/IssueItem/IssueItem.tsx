import * as React from 'react';
import { Paper, Typography, Box, Stack } from '@mui/material';
import { Issue, Status } from 'types';
import {
  BatteryUnknown as BacklogIcon,
  BatteryStd as DoneIcon,
  BatteryAlert as CancelledIcon,
  Battery4Bar as InProgressIcon,
  Battery0Bar as TodoIcon,
  Comment as CommentsIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { formatDistance } from 'date-fns';
import { useUserData } from 'hooks';
import { AssigneeUser, Label } from 'components';

type IssueItemProps = Issue;

const statusIcon: { [key in Status]: React.ReactNode } = {
  backlog: <BacklogIcon sx={{ color: 'secondary.main' }} />,
  done: <DoneIcon sx={{ color: 'success.main' }} />,
  cancelled: <CancelledIcon sx={{ color: 'error.main' }} />,
  inProgress: <InProgressIcon sx={{ color: 'warning.main' }} />,
  todo: <TodoIcon sx={{ color: 'info.main' }} />,
};

export default function IssueItem({
  status,
  title,
  number,
  createdDate,
  createdBy,
  assignee,
  labels,
  comments,
}: IssueItemProps) {
  const createdByUser = useUserData(createdBy);

  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          p: 2,
          '&:hover': { boxShadow: 2 },
          maxWidth: 800,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box sx={{ padding: 1 }}>{statusIcon[status]}</Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexWrap: 'wrap',
              }}
            >
              <Link to={routes.issue(number)}>
                <Typography variant="subtitle1">{title}</Typography>
              </Link>
              <Stack direction="row" spacing={1}>
                {labels.map((label) => (
                  <Label key={label} value={label} />
                ))}
              </Stack>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography>#{number}</Typography>
              <Typography>
                {formatDistance(new Date(createdDate), new Date())}
              </Typography>
              <Typography>
                by {createdByUser.isSuccess && createdByUser.data.name}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {assignee && <AssigneeUser assignee={assignee} />}
              <CommentsIcon />
              <Typography>{comments.length}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
