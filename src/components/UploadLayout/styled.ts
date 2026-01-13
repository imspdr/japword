import styled from "@emotion/styled";
import { Typography } from "@imspdr/ui";

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled(Typography)`
  margin-bottom: 24px;
  color: var(--imspdr-foreground-fg1);
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled(Typography)`
  color: var(--imspdr-foreground-fg2);
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--imspdr-border-border1);
  background: var(--imspdr-background-bg1);
  color: var(--imspdr-foreground-fg1);
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: var(--imspdr-primary-main);
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--imspdr-border-border1);
  background: var(--imspdr-background-bg1);
  color: var(--imspdr-foreground-fg1);
  font-size: 16px;
  outline: none;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: var(--imspdr-primary-main);
  }
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 12px;
  background: var(--imspdr-primary-main);
  border: none;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s;

  @media (hover: hover) {
    &:hover {
      opacity: 0.9;
    }
  }

  &:disabled {
    background: var(--imspdr-background-bg3);
    cursor: not-allowed;
  }
`;

export const ButtonText = styled(Typography)`
  color: white;
`;
