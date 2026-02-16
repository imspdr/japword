import { useState, useEffect, useMemo } from 'react';
import { useWords, WordWithId } from '@/hooks/useWords';

export const useTodaysWord = () => {
  const { data: words, isLoading } = useWords();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words && words.length > 0) {
      setIndex(Math.floor(Math.random() * words.length));
    }
  }, [words]);

  const todaysWord = useMemo(() => {
    if (!words || words.length === 0) return undefined;
    return words[index];
  }, [words, index]);

  const refresh = () => {
    if (words && words.length > 0) {
      setIndex(Math.floor(Math.random() * words.length));
    }
  };

  const speakWord = (word: WordWithId) => {
    const textToSpeak = word.jp || word.char;
    if (!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  return {
    word: todaysWord,
    isLoading,
    speakWord,
    refresh
  };
};
