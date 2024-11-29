export interface User {
  avatar: string;
  email: string;
  username: string;
}

export const UserLoading = undefined;
export const UserNotExist = null;
export type UserStateType = typeof UserNotExist | typeof UserLoading | User;
