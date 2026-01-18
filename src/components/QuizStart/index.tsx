import { FC } from 'react';
import { Typography } from '@imspdr/ui';
import {
  Container,
  QuizCard,
  StartButton
} from './styled';

interface QuizStartProps {
  onStart: () => void;
}

const QUESTIONS_PER_QUIZ = 10;

const QuizStart: FC<QuizStartProps> = ({ onStart }) => {
  return (
    <Container>
      <QuizCard>
        <Typography variant="title" level={2} style={{ marginBottom: 24, textAlign: 'center' }}>
          단어 퀴즈
        </Typography>
        <Typography variant="body" level={1} style={{ marginBottom: 32, textAlign: 'center', color: 'var(--imspdr-foreground-fg2)' }}>
          총 {QUESTIONS_PER_QUIZ}문제의 퀴즈를 풀어보세요.<br />
          등록된 단어 중 랜덤으로 출제됩니다.
        </Typography>
        <StartButton onClick={onStart}>시작하기</StartButton>
      </QuizCard>
    </Container>
  );
};

export default QuizStart;
