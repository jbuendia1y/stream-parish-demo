export const loginUser = (email: string, password: string) => {
  if (email === "example@example.com" && password === "example") return true;
  return false;
};
