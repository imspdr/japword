import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}

export async function logout() {
  await auth.signOut();
}
export async function checkIsAdmin(uid: string): Promise<boolean> {
  const ref = doc(db, "allowedUsers", uid);
  const snap = await getDoc(ref);
  return snap.exists();
}

export function useAuth(): User | null | undefined {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  return user;
}
