import { Status } from 'types';

export const statuses: { id: Status; value: string }[] = [
  { id: 'todo', value: 'To do' },
  { id: 'backlog', value: 'Backlog' },
  { id: 'done', value: 'Done' },
  { id: 'cancelled', value: 'Cancelled' },
  { id: 'inProgress', value: 'In progress' },
];
