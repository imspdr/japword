import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${word.id}`);
  };

  const displayMain = word.char || word.jp;
  const displaySub = word.char ? word.jp : undefined;

  return (
    <CardContainer onClick={handleClick}>
      <InfoGroup>
        <WordJP variant="title" level={3}>
          {displayMain}
        </WordJP>
        {displaySub && <WordChar variant="body" level={2}>
          [{displaySub}]
        </WordChar>}
      </InfoGroup>
      <WordKO variant="body" level={1}>
        {word.ko}
      </WordKO>
    </CardContainer>
  );
};

export default WordItem;
