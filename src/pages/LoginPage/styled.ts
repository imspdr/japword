import styled from '@emotion/styled';
import { Typography } from '@imspdr/ui';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
`;

export const Title = styled(Typography)`
  margin-bottom: 2rem;
  color: var(--imspdr-foreground-fg1);
`;

export const GoogleButton = styled.button`
  background-color: var(--imspdr-background-bg1);
  color: var(--imspdr-foreground-fg2);
  border: 1px solid var(--imspdr-border-border1);
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.2s;

  @media (hover: hover) {
    &:hover {
      background-color: var(--imspdr-background-bg2);
    }
  }
`;
