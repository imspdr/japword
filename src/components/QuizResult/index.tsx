import { FC } from 'react';
import { useAtomValue } from 'jotai';
import { Typography } from '@imspdr/ui';
import {
  quizScoreAtom,
  quizQuestionsAtom,
  quizFailedWordsAtom
} from '../../store/quizAtom';
import {
  Container,
  QuizCard,
  ScoreText,
  FailedList,
  FailedItem,
  StartButton
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
        <Typography variant="title" level={2}>
          퀴즈 결과
        </Typography>
        <ScoreText variant="title" level={1}>
          {score} / {totalQuestions}
        </ScoreText>

        {failedWords.length > 0 && (
          <div style={{ width: '100%' }}>
            <Typography variant="body" level={2} style={{ marginBottom: 8 }}>
              틀린 단어 복습
            </Typography>
            <FailedList>
              {failedWords.map((word, idx) => (
                <FailedItem key={`${word.id}-${idx}`}>
                  <Typography variant="body" level={1} style={{ fontWeight: 700, color: 'var(--imspdr-mint-mint1)' }}>
                    {word.char ? `${word.char} (${word.jp})` : word.jp}
                  </Typography>
                  <Typography variant="body" level={2} style={{ color: 'var(--imspdr-foreground-fg2)' }}>
                    {word.ko}
                  </Typography>
                </FailedItem>
              ))}
            </FailedList>
          </div>
        )}

        <StartButton onClick={onRetry}>다시 도전</StartButton>
      </QuizCard>
    </Container>
  );
};

export default QuizResult;
