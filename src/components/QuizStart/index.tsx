import { FC } from 'react';
import { Typography, Button } from '@imspdr/ui';
import {
  Container,
  QuizCard,
  StartTitle,
  StartDescription,
} from './styled';

interface QuizStartProps {
  onStart: () => void;
}

const QUESTIONS_PER_QUIZ = 10;

const QuizStart: FC<QuizStartProps> = ({ onStart }) => {
  return (
    <Container>
      <QuizCard>
        <StartTitle variant="title" level={2}>
          단어 퀴즈
        </StartTitle>
        <StartDescription variant="body" level={1}>
          총 {QUESTIONS_PER_QUIZ}문제의 퀴즈를 풀어보세요.<br />
          등록된 단어 중 랜덤으로 출제됩니다.
        </StartDescription>
        <Button onClick={onStart} fullWidth variant="contained" color="primary.1" size="lg">
          시작하기
        </Button>
      </QuizCard>
    </Container>
  );
};

export default QuizStart;
