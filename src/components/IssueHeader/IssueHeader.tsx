import { Box } from '@mui/material';
import * as React from 'react';
import { Issue } from 'types';

type IssueHeaderProps = Issue;

export default function IssueHeader({ title }: IssueHeaderProps) {
  return <Box>{title}</Box>;
}
