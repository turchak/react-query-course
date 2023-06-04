export interface User {
  id: string;
  name: string;
  profilePictureUrl: string;
}

export interface Label {
  id: string;
  name: string;
  color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export type Status = 'backlog' | 'todo' | 'inProgress' | 'done' | 'cancelled';

export function isOfTypeStatus(value: string): value is Status {
  return ['backlog', 'todo', 'inProgress', 'done', 'cancelled'].includes(value);
}

export interface Issue {
  id: string;
  number: number;
  title: string;
  status: Status;
  dueDate: Date | null;
  createdDate: Date;
  createdBy: string;
  completedDate: Date | null;
  assignee: string | null;
  labels: string[];
  comments: string[];
}

export interface IssueComment {
  id: string;
  comment: string;
  createdDate: Date;
  createdBy: string;
}
