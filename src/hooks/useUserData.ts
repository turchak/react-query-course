import { useQuery } from 'react-query';
import { API } from 'config';

type User = {
  id: string;
  name: string;
  profilePictureUrl: string; //url
};

export function useUserData(id: string) {
  const fetchUser = (userId: string): Promise<User> => {
    return fetch(API.user(userId)).then((response) => response.json());
  };
  return useQuery<User>(['user', id], () => fetchUser(id));
}
