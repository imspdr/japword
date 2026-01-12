import { FC } from 'react';
import { Stack } from '@imspdr/ui';
import { WordWithId } from '../../hooks/useWords';
import {
  CardContainer,
  ContentContainer,
  HeaderContainer,
  WordChar,
  WordDesc,
  WordJP,
  WordKO
} from './styled';

interface WordItemProps {
  word: WordWithId;
}

const WordItem: FC<WordItemProps> = ({ word }) => {
  return (
    <CardContainer>
      <HeaderContainer>
        <Stack alignItems="baseline" gap="8px">
          <WordJP variant="title" level={3}>
            {word.jp}
          </WordJP>
          <WordChar variant="body" level={2}>
            [{word.char}]
          </WordChar>
        </Stack>
      </HeaderContainer>

      <ContentContainer>
        <WordKO variant="body" level={1}>
          {word.ko}
        </WordKO>
        <WordDesc variant="body" level={2}>
          {word.description}
        </WordDesc>
      </ContentContainer>
    </CardContainer>
  );
};

export default WordItem;
