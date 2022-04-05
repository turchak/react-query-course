import * as React from 'react';
import { Issue } from 'types';

type IssueItemProps = Partial<Issue>;

export default function IssueItem({ title = '' }: IssueItemProps) {
  return <li>{title}</li>;
}
