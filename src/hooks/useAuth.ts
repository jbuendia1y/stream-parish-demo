import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};
