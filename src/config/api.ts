export const API_URL = 'http://localhost:8000';

export const API = {
  issues: `${API_URL}/api/issues`,
  labels: `${API_URL}/api/labels`,
  user: (id: string) => `${API_URL}/api/users/${id}`,
  issue: (id: string) => `${API_URL}/api/issues/${id}`,
};
