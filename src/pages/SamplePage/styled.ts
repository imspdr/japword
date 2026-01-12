import styled from '@emotion/styled';
import { Typography } from '@imspdr/ui';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled(Typography)`
  margin-bottom: 20px;
  color: var(--imspdr-foreground-fg1);
`;

export const CustomList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const CustomCard = styled.li`
  background-color: var(--imspdr-background-bg1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--imspdr-border-border1);
`;

export const WordJP = styled(Typography)`
  font-weight: bold;
  color: var(--imspdr-primary-main);
`;

export const WordKO = styled(Typography)`
  color: var(--imspdr-foreground-fg2);
  margin-top: 5px;
`;

export const WordDesc = styled(Typography)`
  margin-top: 10px;
  color: var(--imspdr-foreground-fg1);
`;
