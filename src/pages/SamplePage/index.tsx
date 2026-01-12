import { useWords } from '../../hooks/useWords';
import {
  Container,
  CustomCard,
  CustomList,
  Title,
  WordDesc,
  WordJP,
  WordKO,
} from './styled';

const SamplePage = () => {
  const { data: words, isLoading, isError } = useWords();

  if (isLoading) return <Container>로딩 중...</Container>;
  if (isError) return <Container>단어 목록을 불러오는데 실패했습니다</Container>;

  return (
    <Container>
      <Title variant="title" level={1}>
        단어 목록
      </Title>
      <CustomList>
        {words?.map((word) => (
          <CustomCard key={word.id}>
            <WordJP variant="body" level={1} style={{ fontSize: '1.5rem' }}>
              {word.jp} ({word.char})
            </WordJP>
            <WordKO variant="body" level={2} style={{ fontSize: '1.2rem' }}>
              {word.ko}
            </WordKO>
            <WordDesc variant="body" level={3}>
              {word.description}
            </WordDesc>
          </CustomCard>
        ))}
      </CustomList>
    </Container>
  );
};

export default SamplePage;
