import styled from "@emotion/styled";
import { Button, Typography } from "@imspdr/ui";

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

export const StartTitle = styled(Typography)`
  margin-bottom: 24px;
  text-align: center;
  display: block; // Typography might be span by default depending on variant, but let's encourage block behavior for title
`;

export const StartDescription = styled(Typography)`
  margin-bottom: 32px;
  text-align: center;
  color: var(--imspdr-foreground-2);
  display: block;
`;


