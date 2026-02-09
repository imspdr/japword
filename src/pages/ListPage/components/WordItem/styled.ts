import styled from '@emotion/styled';
import { Typography } from '@imspdr/ui';

export const CardContainer = styled.div`
  background: var(--imspdr-background-1);
  border: 1px solid var(--imspdr-background-3);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
`;

export const WordJP = styled(Typography)`
  color: var(--imspdr-primary-1);
  font-weight: 700;
  font-size: 1.1rem;
`;

export const WordChar = styled(Typography)`
  color: var(--imspdr-foreground-2);
  font-size: 0.9rem;
`;

export const WordKO = styled(Typography)`
  color: var(--imspdr-foreground-1);
  font-weight: 500;
`;

