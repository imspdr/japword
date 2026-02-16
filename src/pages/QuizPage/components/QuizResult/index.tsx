import { FC } from 'react';
import { Typography, Button } from '@imspdr/ui';
import { useNavigate } from 'react-router-dom';
import { WordWithId } from '@/hooks/useWords';
import {
  Container,
  QuizCard,
  ScoreText,
  FailedList,
  FailedItem,
  FailedWordsSection,
  ButtonGroup
} from './styled';

interface QuizResultProps {
  onRetry: () => void;
  score: number;
  totalQuestions: number;
  failedWords: WordWithId[];
}

const QuizResult: FC<QuizResultProps> = ({ onRetry, score, totalQuestions, failedWords }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <QuizCard>
        <Typography variant="title" level={3}>
          퀴즈 결과
        </Typography>
        <ScoreText variant="title" level={2}>
          {score} / {totalQuestions}
        </ScoreText>

        {failedWords.length > 0 && (
          <FailedWordsSection>
            <Typography variant="body" level={2} bold>
              틀린 단어 복습
            </Typography>
            <FailedList>
              {failedWords.map((word, idx) => (
                <FailedItem key={`${word.id}-${idx}`}>
                  <Typography variant="body" level={2} bold color="primary.1">
                    {word.char ? `${word.char} (${word.jp})` : word.jp}
                  </Typography>
                  <Typography variant="body" level={3} color="foreground.2">
                    {word.ko}
                  </Typography>
                </FailedItem>
              ))}
            </FailedList>
          </FailedWordsSection>
        )}

        <ButtonGroup>
          <Button onClick={() => navigate('/list')} variant="outlined" color="primary.1" size="md">
            목록으로
          </Button>
          <Button onClick={onRetry} variant="contained" color="primary.1" size="md">
            다시 도전
          </Button>
        </ButtonGroup>
      </QuizCard>
    </Container>
  );
};

export default QuizResult;

