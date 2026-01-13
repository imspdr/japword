import { FC } from 'react';
import { WordWithId } from '../../hooks/useWords';
import {
  CardContainer,
  InfoGroup,
  WordChar,
  WordJP,
  WordKO
} from './styled';

interface WordItemProps {
  word: WordWithId;
}

const WordItem: FC<WordItemProps> = ({ word }) => {
  return (
    <CardContainer>
      <InfoGroup>
        <WordJP variant="title" level={3}>
          {word.char}
        </WordJP>
        <WordChar variant="body" level={2}>
          [{word.jp}]
        </WordChar>
      </InfoGroup>
      <WordKO variant="body" level={1}>
        {word.ko}
      </WordKO>
    </CardContainer>
  );
};

export default WordItem;
