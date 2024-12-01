import { doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "../models/User";
import { db } from "../libs/firebase";

export const getUserData = async (uid: string): Promise<User | null> => {
  const snapshot = await getDoc(doc(db, "users", uid));
  if (!snapshot.exists()) return null;
  return snapshot.data() as User;
};

export const updateUserData = async (
  uid: string,
  user: User
): Promise<User> => {
  await setDoc(doc(db, "users", uid), user);
  return user;
};
