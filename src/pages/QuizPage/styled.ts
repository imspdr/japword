import styled from '@emotion/styled';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--imspdr-background-3);
  background: var(--imspdr-background-2);
  color: var(--imspdr-foreground-1);
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: var(--imspdr-primary-1);
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
`;
