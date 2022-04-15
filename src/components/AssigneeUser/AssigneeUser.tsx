import * as React from 'react';
import { Avatar } from '@mui/material';
import { useUserData } from 'hooks';

type AssigneeUserProps = {
  assignee: string;
};

export default function AssigneeUser({ assignee }: AssigneeUserProps) {
  const assigneeUser = useUserData(assignee);
  return assigneeUser.isSuccess ? (
    <Avatar
      alt={`Assignee to ${assigneeUser.data.name}`}
      src={assigneeUser.data.profilePictureUrl}
    />
  ) : null;
}
