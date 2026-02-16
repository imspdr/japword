import { FC } from 'react';
import { useDetail } from './hooks/useDetail';
import { Typography, useModal, Button } from '@imspdr/ui';
import { FaVolumeUp } from 'react-icons/fa';
import {
  Container,
  DetailCard,
  KanjiWrapper,
  InfoRow,
  TextWrapper,
  DescriptionWrapper,
  DateWrapper,
  ButtonContainer,
  ModalFooter
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
          <ModalFooter>
            <Button variant="outlined" onClick={() => closeModal()}>취소</Button>
            <Button onClick={handleConfirmDelete} variant="contained" color="danger.1">삭제</Button>
          </ModalFooter>
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
        <KanjiWrapper>
          <Typography variant="title" level={1} color="primary.1">
            {word.char || word.jp}
          </Typography>
        </KanjiWrapper>

        {/* Second Row: Reading & Voice */}
        <InfoRow>
          {word.char && (
            <TextWrapper>
              <Typography variant="title" level={2}>
                {word.jp}
              </Typography>
            </TextWrapper>
          )}
          <Button
            variant="ghost"
            shape="pill"
            onClick={speakWord}
            aria-label="Listen"
          >
            <FaVolumeUp size={24} color="var(--imspdr-foreground-2)" />
          </Button>
        </InfoRow>

        {/* Third Row: Meaning */}
        <InfoRow>
          <TextWrapper>
            <Typography variant="title" level={3} color="foreground.1" bold>
              {word.ko}
            </Typography>
          </TextWrapper>
        </InfoRow>

        {/* Third Row: Description */}
        {word.description && (
          <DescriptionWrapper>
            <Typography variant="body" level={1} >
              {word.description}
            </Typography>
          </DescriptionWrapper>
        )}

        {/* Date Caption */}
        <DateWrapper>
          <Typography variant="caption" level={1} color="foreground.2">
            등록일: {word.createdAt.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}
          </Typography>
        </DateWrapper>

        {/* Action Row */}
        <ButtonContainer>
          <Button variant="outlined" onClick={goBack}>
            목록으로 돌아가기
          </Button>
          {isAdmin && (
            <Button onClick={initiateDelete} variant="contained" color="danger.1">
              삭제하기
            </Button>
          )}
        </ButtonContainer>
      </DetailCard>
    </Container >
  );
};

export default DetailPage;
