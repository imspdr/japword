import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@imspdr/ui';
import { WordWithId } from '@/hooks/useWords';
import {
  CardContainer,
  InfoGroup,
  MainWrapper,
  SubWrapper,
  MeaningWrapper
} from './styled';

interface WordItemProps {
  word: WordWithId;
}

const WordItem: FC<WordItemProps> = ({ word }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${word.id}`);
  };

  const displayMain = word.char || word.jp;
  const displaySub = word.char ? word.jp : undefined;

  return (
    <CardContainer onClick={handleClick}>
      <InfoGroup>
        <MainWrapper>
          <Typography variant="title" level={3} color="primary.1">
            {displayMain}
          </Typography>
        </MainWrapper>
        {displaySub && (
          <SubWrapper>
            <Typography variant="body" level={2} color="foreground.2">
              [{displaySub}]
            </Typography>
          </SubWrapper>
        )}
      </InfoGroup>
      <MeaningWrapper>
        <Typography variant="body" level={1} color="foreground.1">
          {word.ko}
        </Typography>
      </MeaningWrapper>
    </CardContainer>
  );
};

export default WordItem;
