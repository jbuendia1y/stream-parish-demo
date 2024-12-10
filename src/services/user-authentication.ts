import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { User } from "../models/User";
import { auth, db } from "../libs/firebase";
import { doc, setDoc } from "firebase/firestore";

export class UserAuthentication {
  /* get token() {
    return localStorage.getItem("@StreamParish/TOKEN");
  }
  set token(value: string | null) {
    if (!value) localStorage.removeItem("@StreamParish/TOKEN");
    else localStorage.setItem("@StreamParish/TOKEN", value);
  } */

  async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async register(data: User & { password: string }): Promise<User> {
    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userData } = data;
    await setDoc(doc(db, "users", res.user.uid), userData);
    return data;
  }

  async loginWithGoogle(): Promise<void> {
    await signInWithPopup(auth, new GoogleAuthProvider());
  }

  async logout(): Promise<void> {
    await signOut(auth);
  }
}
