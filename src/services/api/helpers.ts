export const requestPaths = {
  issues: '/issues',
  labels: '/labels',
  search: '/search/issues',
  user: (id: string) => `/users/${id}`,
  issue: (id: string) => `/issues/${id}`,
  comments: (id: string) => `/issues/${id}/comments`,
};
