import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth, checkIsAdmin } from '../../hooks/useAuth';
import { useWords, WordWithId, deleteWord } from '../../hooks/useWords';
import { Typography, useToast } from '@imspdr/ui';
import {
  Container,
  BackButton,
  DetailCard,
  KanjiDisplay,
  InfoRow,
  Label,
  Value,
  DeleteButton
} from './styled';

const DetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = useAuth();
  const { showToast } = useToast();
  const { data: words, isLoading, refetch } = useWords();
  const [word, setWord] = useState<WordWithId | undefined>(undefined);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      checkIsAdmin(user.uid).then(setIsAdmin);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  useEffect(() => {
    if (words && id) {
      const found = words.find((w) => w.id === id);
      setWord(found);
    }
  }, [words, id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = async () => {
    if (!word || !isAdmin) return;
    if (!window.confirm('정말 이 단어를 삭제하시겠습니까?')) return;

    try {
      await deleteWord(word.id);
      showToast('단어가 삭제되었습니다.');
      await refetch(); // refresh list
      navigate('/list');
    } catch (error) {
      console.error(error);
      showToast('삭제 중 오류가 발생했습니다.');
    }
  };

  if (isLoading) {
    return (
      <Container>
        <Typography variant="body" level={1}>Loading...</Typography>
      </Container>
    );
  }

  if (!word) {
    return (
      <Container>
        <BackButton onClick={handleBack}>← 돌아가기</BackButton>
        <Typography variant="body" level={1}>단어를 찾을 수 없습니다.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton onClick={handleBack}>
        <Typography variant="body" level={2}>목록으로 돌아가기</Typography>
      </BackButton>

      <DetailCard>
        <KanjiDisplay variant="title" level={1} style={{ fontSize: '4rem' }}>
          {word.char || word.jp}
        </KanjiDisplay>

        <InfoRow>
          <Label variant="body" level={2}>일본어 표기 / 읽는 법</Label>
          <Value variant="title" level={3}>
            {word.char ? `${word.char} [${word.jp}]` : word.jp}
          </Value>
        </InfoRow>

        <InfoRow>
          <Label variant="body" level={2}>한국어 뜻</Label>
          <Value variant="title" level={3}>{word.ko}</Value>
        </InfoRow>

        {word.description && (
          <InfoRow>
            <Label variant="body" level={2}>설명 / 예문</Label>
            <Value variant="body" level={1}>{word.description}</Value>
          </InfoRow>
        )}

        <InfoRow>
          <Label variant="body" level={2}>등록일</Label>
          <Value variant="body" level={2}>
            {word.createdAt.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}
          </Value>
        </InfoRow>

        {isAdmin && (
          <DeleteButton onClick={handleDelete}>
            삭제하기
          </DeleteButton>
        )}
      </DetailCard>
    </Container>
  );
};

export default DetailPage;
