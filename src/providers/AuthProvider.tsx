import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { AuthContext, AuthCtxValueType } from "../contexts/auth.context";
import { UserLoading, UserStateType } from "../models/User";
import { UserAuthentication } from "../services/user-authentication";

export const AuthProvider = (props: PropsWithChildren) => {
  const authentication = useRef(new UserAuthentication());
  const [user, setUser] = useState<UserStateType>(UserLoading);

  useEffect(() => {
    if (!authentication.current.token) {
      setUser(null);
      return;
    }
    authentication.current
      .getProfile()
      .then((u) => setUser(u))
      .catch(() => setUser(null));
  }, []);

  const login: AuthCtxValueType["login"] = (
    email: string,
    password: string
  ) => {
    return authentication.current
      .login(email, password)
      .then((u) => {
        setUser(u);
        return u;
      })
      .catch((e) => {
        setUser(null);
        return e;
      });
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
