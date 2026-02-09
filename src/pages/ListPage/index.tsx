import { FC } from "react";
import { Typography } from "@imspdr/ui";
import { useList } from "../../hooks/useList";
import {
  GridList,
  LoadingContainer,
  PageContainer,
  SearchInput,
} from "./styled";
import WordItem from "../../components/WordItem";
import ListActions from "../../components/ListActions";

const ListPage: FC = () => {
  const {
    isLoading,
    isError,
    searchTerm,
    searchInputRef,
    handleSearch,
    handleCompositionEnd,
    filteredWords
  } = useList();

  if (isLoading) {
    return (
      <LoadingContainer>
        <Typography variant="body" level={1}>
          데이터를 불러오는 중입니다...
        </Typography>
      </LoadingContainer>
    );
  }

  if (isError) {
    return (
      <LoadingContainer>
        <Typography variant="body" level={1} color="danger.1">
          데이터를 불러오는 중 오류가 발생했습니다.
        </Typography>
      </LoadingContainer>
    );
  }

  return (
    <PageContainer>
      <SearchInput
        ref={searchInputRef}
        value={searchTerm}
        onChange={handleSearch}
        onCompositionEnd={handleCompositionEnd}
        placeholder="단어 검색 (일본어)"
        autoComplete="off"
      />

      <ListActions />

      <GridList>
        {filteredWords?.map((word) => (
          <WordItem key={word.id} word={word} />
        ))}
      </GridList>
    </PageContainer>
  );
};

export default ListPage;
