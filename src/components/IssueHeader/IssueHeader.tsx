import * as React from 'react';
import { Box, Chip } from '@mui/material';
import { useUserData } from 'hooks';

import { Issue } from 'types';
import { statusIcon } from '../IssueItem/IssueItem';
import { statuses } from '../StatusSelect/helpers';
import { formatDistance } from 'date-fns';

type IssueHeaderProps = Issue;

export default function IssueHeader({ title, number, status, createdBy, createdDate, comments }: IssueHeaderProps) {
  const userQuery = useUserData(createdBy);
  const issueStatus = statuses.find((item) => item.id === status)?.value || 'todo';
  return (
    <Box>
      <Box>
        {title} #{number}
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Chip icon={statusIcon[status]} label={issueStatus} />
        <Box sx={{ fontWeight: 500 }}>{userQuery.isSuccess && userQuery.data.name}</Box>
        <Box>opened this issue {formatDistance(new Date(createdDate), Date.now())}</Box>
        <Box>{comments.length} comments</Box>
      </Box>
    </Box>
  );
}
