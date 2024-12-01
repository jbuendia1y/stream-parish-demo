import { createContext } from "react";
import { UserLoading, UserStateType } from "../models/User";
import { UserAuthentication } from "../services/user-authentication";

export interface AuthCtxValueType {
  user: UserStateType;
  login: typeof UserAuthentication.prototype.login;
}

export const AuthContext = createContext<AuthCtxValueType>({
  user: UserLoading as UserStateType,
  login: () => Promise.reject(new Error("FUNCTION NOT LOADED")),
});
