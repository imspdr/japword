import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error: any) {
    console.error("Login failed:", error.code, error.message);
    if (error.code === 'auth/unauthorized-domain') {
      console.error("Please add this domain to the Authorized Domains list in the Firebase Console.");
    }
  }
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
