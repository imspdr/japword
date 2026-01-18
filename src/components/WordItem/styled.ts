import styled from '@emotion/styled';
import { Typography } from '@imspdr/ui';

export const CardContainer = styled.div`
  background: var(--imspdr-background-bg1);
  border: 1px solid var(--imspdr-border-border1);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--imspdr-mint-mint1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
`;

export const WordJP = styled(Typography)`
  color: var(--imspdr-mint-mint1);
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

