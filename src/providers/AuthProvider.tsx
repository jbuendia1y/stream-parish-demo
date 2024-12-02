import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext, AuthCtxValueType } from "../contexts/auth.context";
import { User, UserLoading, UserNotExist, UserStateType } from "../models/User";
import { UserAuthentication } from "../services/user-authentication";
import { auth } from "../libs/firebase";
import { getUserData, updateUserData } from "../services/user-data";

export const AuthProvider = (props: PropsWithChildren) => {
  const authentication = useRef(new UserAuthentication());
  const [user, setUser] = useState<UserStateType>(UserLoading);

  useEffect(() => {
    const sub = onAuthStateChanged(auth, async (u) => {
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
        avatar:
          u.photoURL ??
          "https://fastly.picsum.photos/id/237/100/100.jpg?hmac=Pna_vL4vYBRMXxFMY-lYXcZAL34T7PZWdNDlEOwqqE4",
        email: u.email as string,
        username:
          u.displayName?.toLocaleLowerCase()?.replace(" ", "-") ?? "Example",
      };
      await updateUserData(u.uid, userData);
      setUser(userData);
    });
    return () => {
      sub();
    };
  }, []);

  const login: AuthCtxValueType["login"] = (email, password) => {
    return authentication.current.login(email, password);
  };

  const loginWithGoogle: AuthCtxValueType["loginWithGoogle"] = () => {
    return authentication.current.loginWithGoogle();
  };

  const registerWithEmail: AuthCtxValueType["registerWithEmail"] = (data) => {
    return authentication.current.register(data);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, loginWithGoogle, registerWithEmail }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
