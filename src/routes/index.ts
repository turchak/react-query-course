export const basePath = '';
export const paths = {
  issues: `${basePath}/`,
  issue: `${basePath}/issue/:id`,
};
export const routes = {
  issues: () => paths.issues,
  issue: (id: number) => paths.issue.replace(':id', `${id}`),
};
