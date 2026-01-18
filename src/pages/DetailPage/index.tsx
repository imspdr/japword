import { FC } from 'react';
import { useDetail } from '../../hooks/useDetail';
import { Typography, useModal, Button, Stack } from '@imspdr/ui';
import { FaVolumeUp } from 'react-icons/fa';
import {
  Container,
  DetailCard,
  KanjiDisplay,
  InfoRow,
  Value,
  DateCaption
} from './styled';

const DetailPage: FC = () => {
  const {
    word,
    isLoading,
    isAdmin,
    goBack,
    deleteCurrentWord,
    speakWord
  } = useDetail();
  const { openModal, closeModal } = useModal();

  const initiateDelete = () => {
    if (!word || !isAdmin) return;

    const handleConfirmDelete = async () => {
      try {
        await deleteCurrentWord();
        closeModal();
      } catch (error) {
        // Error handling (toast) is done in hook, but we might want to keep modal open or close it?
        // Original code closed it on error too.
        closeModal();
      }
    };

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
            <Button onClick={handleConfirmDelete} style={{ background: '#ff4d4f', borderColor: '#ff4d4f', color: 'white' }}>삭제</Button>
          </Stack>
        )
      }
    );
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
        <Button variant="outlined" onClick={goBack}>← 돌아가기</Button>
        <Typography variant="body" level={1}>단어를 찾을 수 없습니다.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <DetailCard>
        {/* Top: Kanji */}
        <Stack direction="row" alignItems="center" justifyContent="center" gap="10px">
          <KanjiDisplay variant="title" level={1} style={{ fontSize: '4rem' }}>
            {word.char || word.jp}
          </KanjiDisplay>
          <Button
            variant="ghost"
            onClick={speakWord}
            style={{ padding: '8px', borderRadius: '50%', minWidth: 'auto' }}
            aria-label="Listen"
          >
            <FaVolumeUp size={24} color="var(--imspdr-foreground-fg2)" />
          </Button>
        </Stack>

        {/* Second Row: Reading & Meaning */}
        <InfoRow>
          {word.char && (
            <Value variant="title" level={2} style={{ textAlign: 'center' }}>
              {word.jp}
            </Value>
          )}
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
          <Button variant="outlined" onClick={goBack}>
            목록으로 돌아가기
          </Button>
          {isAdmin && (
            <Button onClick={initiateDelete} style={{ background: '#ff4d4f', borderColor: '#ff4d4f', color: 'white' }}>
              삭제하기
            </Button>
          )}
        </Stack>
      </DetailCard>
    </Container >
  );
};

export default DetailPage;
