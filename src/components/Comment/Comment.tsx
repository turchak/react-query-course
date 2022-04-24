import { Avatar, Box, Paper } from '@mui/material';
import * as React from 'react';
import { IssueComment } from 'types';
import { useUserData } from 'hooks';
import { formatDistance } from 'date-fns';

type CommentProps = IssueComment;

export default function Comment({
  comment,
  createdBy,
  createdDate,
}: CommentProps) {
  const userQuery = useUserData(createdBy);
  if (userQuery.isLoading) return null;
  return (
    <Box>
      {userQuery.isSuccess && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={userQuery.data.profilePictureUrl} />
          <Paper
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,

              flexGrow: 1,
              padding: 1,
              marginLeft: 2,
            }}
          >
            <Box>{userQuery.data.name}</Box>
            <Box>
              {`commented ${formatDistance(new Date(createdDate), Date.now())}`}
            </Box>
            <Box sx={{ width: '100%' }}>{comment}</Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
}
