import React from 'react';
import { Typography } from '@imspdr/ui';
import { useTodaysWord } from '../TodaysWord/useTodaysWord';
import { WidgetContainer, InfoWrapper } from './styled';

const MiniWordWidget = () => {
  const { word, isLoading } = useTodaysWord();

  const handleClick = () => {
    window.location.href = 'https://imspdr.github.io/japword';
  };

  if (isLoading || !word) {
    return (
      <WidgetContainer onClick={handleClick}>
        <Typography variant="caption" color="foreground.3" level={6}>
          JAP
        </Typography>
      </WidgetContainer>
    );
  }

  return (
    <WidgetContainer onClick={handleClick}>
      <InfoWrapper>
        <Typography
          variant="body"
          level={1}
          bold
          color="foreground.1"
        >
          {word.char || word.jp}
        </Typography>
        <Typography
          variant="body"
          level={3}
          color="foreground.2"
        >
          {word.ko}
        </Typography>
      </InfoWrapper>
    </WidgetContainer>
  );
};

export default MiniWordWidget;
