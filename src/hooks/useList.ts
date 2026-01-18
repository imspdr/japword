import { useState, useRef, useEffect } from "react";
import { bind, unbind, toKana } from 'wanakana';
import { useWords } from "./useWords";

export const useList = () => {
  const { data: words, isLoading, isError } = useWords();
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      bind(searchInputRef.current);
    }
    return () => {
      if (searchInputRef.current) unbind(searchInputRef.current);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(toKana(e.target.value));
  };

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    setSearchTerm(toKana(e.currentTarget.value));
  };

  const filteredWords = words?.filter((word) => {
    if (!searchTerm) return true;
    // Normalize both for comparison (remove whitespace)
    const normalizedSearch = searchTerm.replace(/\s+/g, '');
    const normalizedJp = word.jp.replace(/\s+/g, '');
    return normalizedJp.includes(normalizedSearch);
  });

  return {
    words,
    isLoading,
    isError,
    searchTerm,
    searchInputRef,
    handleSearch,
    handleCompositionEnd,
    filteredWords
  };
};
