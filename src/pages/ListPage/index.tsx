import { FC, useState, useRef, useEffect } from "react";
import { Typography } from "@imspdr/ui";
import { useWords } from "../../hooks/useWords";
import { bind, unbind, toKana } from 'wanakana';
import {
  GridList,
  LoadingContainer,
  PageContainer,
  SearchContainer,
  SearchInput,
} from "./styled";
import WordItem from "../../components/WordItem";
import ListActions from "../../components/ListActions";

const ListPage: FC = () => {
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
        <Typography variant="body" level={1} style={{ color: "red" }}>
          데이터를 불러오는 중 오류가 발생했습니다.
        </Typography>
      </LoadingContainer>
    );
  }

  return (
    <PageContainer>

      <SearchContainer>
        <SearchInput
          ref={searchInputRef}
          value={searchTerm}
          onChange={handleSearch}
          onCompositionEnd={handleCompositionEnd}
          placeholder="단어 검색 (일본어)"
          autoComplete="off"
        />
      </SearchContainer>

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
