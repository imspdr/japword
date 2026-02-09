import styled from "@emotion/styled";
import { Typography, Button } from "@imspdr/ui";

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled(Typography)`
  margin-bottom: 24px;
  color: var(--imspdr-foreground-1);
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
  color: var(--imspdr-foreground-2);
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--imspdr-background-3);
  background: var(--imspdr-background-1);
  color: var(--imspdr-foreground-1);
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: var(--imspdr-primary-1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--imspdr-background-3);
  background: var(--imspdr-background-1);
  color: var(--imspdr-foreground-1);
  font-size: 16px;
  outline: none;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: var(--imspdr-primary-1);
  }
`;




