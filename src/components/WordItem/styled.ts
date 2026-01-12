import styled from '@emotion/styled';
import { Typography } from '@imspdr/ui';

export const CardContainer = styled.li`
  background-color: var(--imspdr-background-bg1);
  padding: 32px;
  border-radius: 16px;
  border: 1px solid var(--imspdr-border-border1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      border-color: var(--imspdr-primary-main);
    }
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 4px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const WordJP = styled(Typography)`
  color: var(--imspdr-primary-main);
  font-weight: 700;
`;

export const WordChar = styled(Typography)`
  color: var(--imspdr-foreground-fg2);
`;

export const WordKO = styled(Typography)`
  color: var(--imspdr-foreground-fg1);
  margin-top: 4px;
  font-weight: 500;
`;

export const WordDesc = styled(Typography)`
  color: var(--imspdr-foreground-fg3);
  margin-top: 8px;
  line-height: 1.5;
`;
