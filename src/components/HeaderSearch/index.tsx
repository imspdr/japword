import { FC } from "react";
import { HiSearch } from "react-icons/hi";
import { SearchContainer, SearchWrapper, StyledInput, IconWrapper } from "./styled";
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
      <SearchWrapper>
        <StyledInput
          ref={searchInputRef}
          value={searchTerm}
          onChange={handleChange}
          onCompositionEnd={handleCompositionEnd}
          placeholder="단어 검색 (일본어)"
          autoComplete="off"
        />
        <IconWrapper>
          <HiSearch size={16} />
        </IconWrapper>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default HeaderSearch;
