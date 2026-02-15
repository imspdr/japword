import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { bind, unbind, toKana } from "wanakana";
import { searchTermAtom } from "@/store/searchAtom";

export const useHeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      bind(searchInputRef.current);
    }
    return () => {
      if (searchInputRef.current) unbind(searchInputRef.current);
    };
  }, []);

  const handleChange = (value: string) => {
    setSearchTerm(toKana(value));
  };

  const handleCompositionEnd = (value: string) => {
    setSearchTerm(toKana(value));
  };

  return {
    searchTerm,
    searchInputRef,
    handleChange,
    handleCompositionEnd
  };
};
