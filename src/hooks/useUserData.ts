import { useQuery } from '@tanstack/react-query';
import { api, requestPaths } from 'services';

type User = {
  id: string;
  name: string;
  profilePictureUrl: string; //url
};

export function useUserData(id: string) {
  const fetchUser = (id: string): Promise<User> => {
    return api.get(requestPaths.user(id));
  };
  return useQuery(['user', id], () => fetchUser(id));
}
