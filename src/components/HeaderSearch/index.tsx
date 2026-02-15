import { FC } from "react";
import { SearchInput as UISearchInput } from "@imspdr/ui";
import { SearchContainer } from "./styled";
import { useHeaderSearch } from "./useHeaderSearch";

const HeaderSearch: FC = () => {
  const {
    searchTerm,
    searchInputRef,
    handleChange,
    handleCompositionEnd
  } = useHeaderSearch();

  return (
    <SearchContainer>
      <UISearchInput
        ref={searchInputRef}
        value={searchTerm}
        onChange={handleChange}
        onCompositionEnd={handleCompositionEnd}
        placeholder="단어 검색 (일본어)"
        autoComplete="off"
      />
    </SearchContainer>
  );
};

export default HeaderSearch;
