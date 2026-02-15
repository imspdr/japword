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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(toKana(e.target.value));
  };

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    setSearchTerm(toKana(e.currentTarget.value));
  };

  return {
    searchTerm,
    searchInputRef,
    handleChange,
    handleCompositionEnd
  };
};
