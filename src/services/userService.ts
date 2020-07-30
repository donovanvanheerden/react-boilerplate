import { request } from 'react-request-hook';
import User from '../globals/interfaces/User';

export const userService = {
  getUser: (id: string) => {
    return request<User>({
      method: 'GET',
      url: `users/${id}`,
    });
  },
  getUsers: () => {
    return request<User[]>({
      method: 'GET',
      url: `users`,
    });
  },
};
