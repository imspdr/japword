import styled from '@emotion/styled';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`;

export const ActionButton = styled.button`
  background: var(--imspdr-background-bg1);
  border: 1px solid var(--imspdr-border-border2);
  padding: 14px 32px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--imspdr-foreground-fg1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-color: var(--imspdr-primary-main);
      color: var(--imspdr-primary-main);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`;

export const ModalConfirmButton = styled(ActionButton)`
  background: #20c997;
  color: white;
  border: none;
  font-weight: 600;

  @media (hover: hover) {
    &:hover {
      background: #12b886;
      transform: translateY(-2px);
    }
  }
`;

export const ModalCancelButton = styled(ActionButton)`
  background: transparent;
  border: 1px solid var(--imspdr-border-border1);
  color: var(--imspdr-foreground-fg2);

  @media (hover: hover) {
    &:hover {
      background: var(--imspdr-background-bg2);
      transform: none;
    }
  }
`;
