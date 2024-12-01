import { createContext } from "react";
import { UserLoading, UserStateType } from "../models/User";
import { UserAuthentication } from "../services/user-authentication";

export interface AuthCtxValueType {
  user: UserStateType;
  login: typeof UserAuthentication.prototype.login;
  registerWithEmail: typeof UserAuthentication.prototype.register;
  loginWithGoogle: typeof UserAuthentication.prototype.loginWithGoogle;
}

export const AuthContext = createContext<AuthCtxValueType>({
  user: UserLoading as UserStateType,
  login: () => Promise.reject(new Error("FUNCTION NOT LOADED")),
  loginWithGoogle: () => Promise.reject(new Error("FUNCTION NOT LOADED")),
  registerWithEmail: () => Promise.reject(new Error("FUNCTION NOT LOADED")),
});
