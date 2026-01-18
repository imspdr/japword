import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth, checkIsAdmin } from '../../hooks/useAuth';
import { useWords, WordWithId, deleteWord } from '../../hooks/useWords';
import { Typography, useToast, useModal, Button, Stack } from '@imspdr/ui';
import {
  Container,
  DetailCard,
  KanjiDisplay,
  InfoRow,
  Value,
  DateCaption
} from './styled';

const DetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = useAuth();
  const { showToast } = useToast();
  const { openModal, closeModal } = useModal();
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

  const executeDelete = async () => {
    if (!word) return;
    try {
      await deleteWord(word.id);
      showToast('단어가 삭제되었습니다.');
      await refetch();
      closeModal();
      navigate('/list');
    } catch (error) {
      console.error(error);
      showToast('삭제 중 오류가 발생했습니다.');
      closeModal();
    }
  };

  const handleDelete = () => {
    if (!word || !isAdmin) return;

    openModal(
      <Typography variant="body" level={1}>
        정말 이 단어를 삭제하시겠습니까?<br />
        삭제된 데이터는 복구할 수 없습니다.
      </Typography>,
      {
        title: '단어 삭제',
        footer: (
          <Stack direction="row" gap="12px">
            <Button variant="outlined" onClick={() => closeModal()}>취소</Button>
            <Button onClick={executeDelete} style={{ background: '#ff4d4f', borderColor: '#ff4d4f', color: 'white' }}>삭제</Button>
          </Stack>
        )
      }
    );
  };

  // ... rest of the component

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
        <Button variant="outlined" onClick={handleBack}>← 돌아가기</Button>
        <Typography variant="body" level={1}>단어를 찾을 수 없습니다.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <DetailCard>
        {/* Top: Kanji */}
        <KanjiDisplay variant="title" level={1} style={{ fontSize: '4rem' }}>
          {word.char || word.jp}
        </KanjiDisplay>

        {/* Second Row: Reading & Meaning */}
        <InfoRow>
          <Value variant="title" level={2} style={{ textAlign: 'center' }}>
            {word.jp}
          </Value>
          <Value variant="title" level={3} style={{ textAlign: 'center', color: 'var(--imspdr-foreground-fg2)' }}>
            {word.ko}
          </Value>
        </InfoRow>

        {/* Third Row: Description */}
        {word.description && (
          <InfoRow>
            <Value variant="body" level={1} style={{ textAlign: 'center' }}>
              {word.description}
            </Value>
          </InfoRow>
        )}

        {/* Date Caption */}
        <DateCaption variant="caption" level={1}>
          등록일: {word.createdAt.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}
        </DateCaption>

        {/* Action Row */}
        <Stack direction="row" gap="12px">
          <Button variant="outlined" onClick={handleBack}>
            목록으로 돌아가기
          </Button>
          {isAdmin && (
            <Button onClick={handleDelete} style={{ background: '#ff4d4f', borderColor: '#ff4d4f', color: 'white' }}>
              삭제하기
            </Button>
          )}
        </Stack>
      </DetailCard>
    </Container >
  );
};

export default DetailPage;
