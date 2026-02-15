import { useAtomValue } from "jotai";
import { useWords } from "@/hooks/useWords";
import { searchTermAtom } from "@/store/searchAtom";
import { toHiragana } from "wanakana";

export const useList = () => {
  const { data: words, isLoading, isError } = useWords();
  const searchTerm = useAtomValue(searchTermAtom);

  const filteredWords = words?.filter((word) => {
    if (!searchTerm) return true;

    const normalizedSearch = toHiragana(searchTerm.replace(/\s+/g, '')).toLowerCase();
    const normalizedJp = toHiragana(word.jp.replace(/\s+/g, '')).toLowerCase();
    const normalizedKo = word.ko.replace(/\s+/g, '').toLowerCase();
    const normalizedChar = toHiragana(word.char?.replace(/\s+/g, '') || "").toLowerCase();

    return (
      /**
       * jp: reading (kana)
       * ko: meaning (korean)
       * char: kanji/notation
       */
      normalizedJp.includes(normalizedSearch) ||
      normalizedKo.includes(normalizedSearch) ||
      normalizedChar.includes(normalizedSearch)
    );
  });

  return {
    words,
    isLoading,
    isError,
    searchTerm,
    filteredWords
  };
};
