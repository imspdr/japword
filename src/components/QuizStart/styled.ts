import styled from "@emotion/styled";

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
  background: var(--imspdr-background-bg1);
  border: 1px solid var(--imspdr-border-border1);
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
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
  transition: opacity 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.9;
  }
`;
