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

export const ResultContainer = styled(QuizCard)`
  gap: 24px;
`;

export const ScoreText = styled(Typography)`
  color: var(--imspdr-mint-mint1);
  font-weight: 800;
`;

export const FailedList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 16px 0;
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FailedItem = styled.li`
  background: var(--imspdr-background-bg2);
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StartButton = styled.button`
  background: var(--imspdr-mint-mint1);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 48px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: none;
`;
