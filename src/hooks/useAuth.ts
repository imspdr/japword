import { useState, useEffect } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { useToast } from '@imspdr/ui';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const docRef = doc(db, 'allowedUsers', currentUser.uid);
          const docSnap = await getDoc(docRef);
          setIsAllowed(docSnap.exists());
        } catch (error) {
          setIsAllowed(false);
        }
      } else {
        setIsAllowed(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      showToast('성공적으로 로그아웃되었습니다.');
    } catch (error) {
      showToast("로그아웃 실패. 다시 시도해주세요.");
    }
  };

  return { user, loading, isAllowed, logout };
};
