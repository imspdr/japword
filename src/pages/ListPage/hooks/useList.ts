import { useAtomValue } from "jotai";
import { useWords } from "@/hooks/useWords";
import { searchTermAtom } from "@/store/searchAtom";

export const useList = () => {
  const { data: words, isLoading, isError } = useWords();
  const searchTerm = useAtomValue(searchTermAtom);

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
    filteredWords
  };
};
