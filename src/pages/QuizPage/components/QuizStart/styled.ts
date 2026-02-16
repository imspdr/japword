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

export const SettingsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
  padding: 24px;
  border-radius: 16px;
  background: var(--imspdr-background-2);
  border: 1px solid var(--imspdr-background-3);
  box-sizing: border-box;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 14px;
  border-radius: 10px;
  border: 1px solid var(--imspdr-background-3);
  background: var(--imspdr-background-1);
  color: var(--imspdr-foreground-1);
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
  &:focus {
    border-color: var(--imspdr-primary-1);
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s;
  &:hover {
    background: var(--imspdr-background-3);
  }

  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;


