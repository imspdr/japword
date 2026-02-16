import { FC } from 'react';
import { useTodaysWord } from './useTodaysWord';
import { Typography, Button } from '@imspdr/ui';
import { FaVolumeUp, FaSyncAlt } from 'react-icons/fa';
import {
  WidgetContainer,
  HeaderRow,
  LayoutGrid,
  KanjiWrapper,
  InfoColumn,
  TextWrapper,
  MeaningRow,
  DescriptionRow,
  ButtonGroup
} from './styled';

const TodaysWord: FC = () => {
  const { word, isLoading, speakWord, refresh } = useTodaysWord();

  if (isLoading) {
    return (
      <WidgetContainer>
        <Typography variant="body" level={2}>로딩 중...</Typography>
      </WidgetContainer>
    );
  }

  if (!word) {
    return (
      <WidgetContainer>
        <Typography variant="body" level={2}>단어를 찾을 수 없습니다.</Typography>
      </WidgetContainer>
    );
  }

  return (
    <WidgetContainer>
      <HeaderRow>
        <Typography variant="body" level={3} color="foreground.2" bold>오늘의 단어</Typography>
        <ButtonGroup>
          <Button
            variant="ghost"
            size="xs"
            shape="pill"
            onClick={refresh}
            aria-label="Refresh"
          >
            <FaSyncAlt size={12} color="var(--imspdr-foreground-2)" />
          </Button>
          <Button
            variant="ghost"
            size="xs"
            shape="pill"
            onClick={() => speakWord(word)}
            aria-label="Listen"
          >
            <FaVolumeUp size={14} color="var(--imspdr-foreground-2)" />
          </Button>
        </ButtonGroup>
      </HeaderRow>

      <LayoutGrid>
        <KanjiWrapper>
          <Typography variant="title" level={3} color="primary.1">
            {word.char || word.jp}
          </Typography>
        </KanjiWrapper>

        <InfoColumn>
          {word.char && (
            <TextWrapper>
              <Typography variant="body" level={1} bold>
                {word.jp}
              </Typography>
            </TextWrapper>
          )}
        </InfoColumn>
      </LayoutGrid>

      <MeaningRow>
        <TextWrapper>
          <Typography variant="body" level={1} color="primary.1" bold tooltip={word.ko}>
            {word.ko}
          </Typography>
        </TextWrapper>
      </MeaningRow>

      {word.description && (
        <DescriptionRow>
          <Typography variant="caption" level={1} style={{ whiteSpace: 'pre-wrap' }}>
            {word.description}
          </Typography>
        </DescriptionRow>
      )}
    </WidgetContainer>
  );
};


export default TodaysWord;
