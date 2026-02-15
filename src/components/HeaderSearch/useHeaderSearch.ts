import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { bind, unbind, toKana } from "wanakana";
import { searchTermAtom } from "@/store/searchAtom";

export const useHeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (value: string) => {
    setSearchTerm(toKana(value || "", { IMEMode: true }));
  };

  const handleCompositionEnd = (value: string) => {
    setSearchTerm(toKana(value || "", { IMEMode: true }));
  };

  return {
    searchTerm,
    handleChange,
    handleCompositionEnd
  };
};
