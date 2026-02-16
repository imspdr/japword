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


const QuizStart: FC<QuizStartProps> = ({ onStart }) => {
  return (
    <Container>
      <QuizCard>
        <StartTitle variant="title" level={2}>
          단어 퀴즈
        </StartTitle>
        <StartDescription variant="body" level={1}>
          등록된 단어 중 랜덤으로 출제됩니다.<br />
          문제 수와 유형을 설정하고 시작해보세요.
        </StartDescription>
        <Button onClick={onStart} fullWidth variant="contained" color="primary.1" size="lg">
          시작하기
        </Button>
      </QuizCard>
    </Container>
  );
};

export default QuizStart;
