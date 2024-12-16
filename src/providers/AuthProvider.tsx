import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext, AuthCtxValueType } from "../contexts/auth.context";
import {
  DEFAULT_USER_AVATAR_URL,
  User,
  UserLoading,
  UserNotExist,
  UserStateType,
} from "../models/User";
import { UserAuthentication } from "../services/user-authentication";
import { auth } from "../libs/firebase";
import { getUserData, updateUserData } from "../services/user-data";

export const AuthProvider = (props: PropsWithChildren) => {
  const authentication = useRef(new UserAuthentication());
  const [user, setUser] = useState<UserStateType>(UserLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUser(UserNotExist);
        return;
      }

      const inDbUser = await getUserData(u.uid);
      if (inDbUser) {
        setUser(inDbUser);
        return;
      }

      const userData: User = {
        avatar: u.photoURL ?? DEFAULT_USER_AVATAR_URL,
        email: u.email as string,
        username:
          u.displayName?.toLocaleLowerCase()?.replace(" ", "-") ?? "Example",
      };
      await updateUserData(u.uid, userData);
      setUser(userData);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const login: AuthCtxValueType["login"] = (email, password) => {
    setUser(UserLoading);
    return authentication.current.login(email, password);
  };

  const logout: AuthCtxValueType["logout"] = () => {
    return authentication.current.logout();
  };

  const loginWithGoogle: AuthCtxValueType["loginWithGoogle"] = () => {
    setUser(UserLoading);
    return authentication.current.loginWithGoogle();
  };

  const registerWithEmail: AuthCtxValueType["registerWithEmail"] = (data) => {
    return authentication.current.register(data);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loginWithGoogle, registerWithEmail }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
