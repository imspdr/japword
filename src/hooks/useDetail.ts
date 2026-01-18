import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth, checkIsAdmin } from './useAuth';
import { useWords, deleteWord as apiDeleteWord, WordWithId } from './useWords';
import { useToast } from '@imspdr/ui';

export const useDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = useAuth();
  const { showToast } = useToast();
  const { data: words, isLoading, refetch } = useWords();
  const [word, setWord] = useState<WordWithId | undefined>(undefined);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      checkIsAdmin(user.uid).then(setIsAdmin);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  useEffect(() => {
    if (words && id) {
      const found = words.find((w) => w.id === id);
      setWord(found);
    }
  }, [words, id]);

  const goBack = () => {
    navigate(-1);
  };

  const deleteCurrentWord = async () => {
    if (!word) return;
    try {
      await apiDeleteWord(word.id);
      showToast('단어가 삭제되었습니다.');
      await refetch();
      navigate('/list');
    } catch (error) {
      console.error(error);
      showToast('삭제 중 오류가 발생했습니다.');
      throw error; // Re-throw to let caller know it failed if needed
    }
  };

  const speakWord = () => {
    if (!word) return;
    const textToSpeak = word.jp || word.char;
    if (!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  return {
    word,
    isLoading,
    isAdmin,
    goBack,
    deleteCurrentWord,
    speakWord
  };
};
