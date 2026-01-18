import styled from "@emotion/styled";
import { Typography } from "@imspdr/ui";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  min-height: 60vh;
`;

export const QuizCard = styled.div`
  width: 100%;
  padding: 32px 0;
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
  border-bottom: 1px solid var(--imspdr-border-border1);
`;

export const QuestionSection = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

export const QuestionLabel = styled(Typography)`
  color: var(--imspdr-foreground-fg2);
  margin-bottom: 16px;
`;

export const QuestionText = styled(Typography)`
  color: var(--imspdr-mint-mint1);
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

export const OptionButton = styled.button`
  background-color: var(--imspdr-background-bg1);
  border: 1px solid var(--imspdr-border-border1);
  border-radius: 12px;
  padding: 20px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: none;
`;
