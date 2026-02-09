import { FC } from 'react';
import { useAtomValue } from 'jotai';
import { Typography, Button } from '@imspdr/ui';
import {
  quizScoreAtom,
  quizQuestionsAtom,
  quizFailedWordsAtom
} from '@/store/quizAtom';
import {
  Container,
  QuizCard,
  ScoreText,
  FailedList,
  FailedItem,
  FailedWordsSection
} from './styled';

interface QuizResultProps {
  onRetry: () => void;
}

const QuizResult: FC<QuizResultProps> = ({ onRetry }) => {
  const score = useAtomValue(quizScoreAtom);
  const totalQuestions = useAtomValue(quizQuestionsAtom).length;
  const failedWords = useAtomValue(quizFailedWordsAtom);

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

        <Button onClick={onRetry} fullWidth variant="contained" color="primary.1" size="md">
          다시 도전
        </Button>
      </QuizCard>
    </Container>
  );
};

export default QuizResult;
