import { FC } from 'react';
import styled from '@emotion/styled';
import { Typography } from '@imspdr/ui';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  gap: 20px;
`;

const QuizPage: FC = () => {
  return (
    <Container>
      <Typography variant="title" level={1}>
        퀴즈 페이지 (준비 중)
      </Typography>
      <Typography variant="body" level={1}>
        곧 업데이트될 예정입니다.
      </Typography>
    </Container>
  );
};

export default QuizPage;
