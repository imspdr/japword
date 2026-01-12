import { FC } from "react";
import { Typography } from "@imspdr/ui";
import { useWords } from "../../hooks/useWords";
import {
  GridList,
  LoadingContainer,
  PageContainer,
} from "./styled";
import WordItem from "../../components/WordItem";
import ListActions from "../../components/ListActions";

const ListPage: FC = () => {
  const { data: words, isLoading, isError } = useWords();

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
      <ListActions />

      <GridList>
        {words?.map((word) => (
          <WordItem key={word.id} word={word} />
        ))}
      </GridList>
    </PageContainer>
  );
};


export default ListPage;
