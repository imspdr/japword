import styled from "@emotion/styled";

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
  gap: 32px;
`;

export const ScoreWrapper = styled.div`
  & > * {
    font-weight: 800;
  }
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
`;

export const FailedItem = styled.li`
  background: var(--imspdr-background-2);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  margin-bottom: 8px;
`;

export const FailedWordsSection = styled.div`
  width: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-top: 16px;

  & > button {
    flex: 1;
  }
`;
