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
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  box-shadow: none;
`;
