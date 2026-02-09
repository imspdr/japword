import styled from "@emotion/styled";
import { Typography, Button } from "@imspdr/ui";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  min-height: 60vh;
`;

export const QuizCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--imspdr-background-3);
`;

export const QuestionSection = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

export const QuestionLabel = styled(Typography)`
  color: var(--imspdr-foreground-2);
  margin-bottom: 16px;
`;

export const QuestionText = styled(Typography)`
  color: var(--imspdr-primary-1);
  font-weight: 700;
  line-height: 1.4;
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const QuizOptionButton = styled(Button)`
  padding: 20px 16px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--imspdr-background-3);
  background: var(--imspdr-background-1);
  
  &:hover {
      background: var(--imspdr-background-2);
  }
`;


