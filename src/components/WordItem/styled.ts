import styled from '@emotion/styled';
import { Typography } from '@imspdr/ui';

export const CardContainer = styled.li`
  background-color: var(--imspdr-background-bg1);
  padding: 16px 24px;
  border-radius: 12px;
  border: 1px solid var(--imspdr-border-border1);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      border-color: var(--imspdr-primary-main);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
`;

export const WordJP = styled(Typography)`
  color: var(--imspdr-primary-main);
  font-weight: 700;
  font-size: 1.1rem;
`;

export const WordChar = styled(Typography)`
  color: var(--imspdr-foreground-fg2);
  font-size: 0.9rem;
`;

export const WordKO = styled(Typography)`
  color: var(--imspdr-foreground-fg1);
  font-weight: 500;
`;

