export interface User {
  avatar: string;
  email: string;
  username: string;
}

export const UserLoading = undefined;
export const UserNotExist = null;
export type UserStateType = typeof UserNotExist | typeof UserLoading | User;

export const DEFAULT_USER_AVATAR_URL =
  "https://fastly.picsum.photos/id/237/100/100.jpg?hmac=Pna_vL4vYBRMXxFMY-lYXcZAL34T7PZWdNDlEOwqqE4";
