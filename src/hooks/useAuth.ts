import { useState, useEffect } from 'react';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { useToast } from '@imspdr/ui';
import { auth } from '../firebase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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

  return { user, loading, logout };
};
