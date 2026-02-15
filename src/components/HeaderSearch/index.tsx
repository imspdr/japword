import { FC } from "react";
import { SearchInput as UISearchInput } from "@imspdr/ui";
import { SearchContainer } from "./styled";
import { useHeaderSearch } from "./useHeaderSearch";

const HeaderSearch: FC = () => {
  const {
    searchTerm,
    handleChange,
    handleCompositionEnd
  } = useHeaderSearch();

  return (
    <SearchContainer>
      <UISearchInput
        value={searchTerm}
        onChange={handleChange}
        onCompositionEnd={handleCompositionEnd}
        placeholder="단어 검색"
        autoComplete="off"
      />
    </SearchContainer>
  );
};

export default HeaderSearch;
