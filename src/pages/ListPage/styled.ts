import styled from '@emotion/styled';

export const PageContainer = styled.div`
  padding: 10px 20px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const GridList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1440px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const LoadingContainer = styled.div`
  padding: 40px;
  text-align: center;
  color: var(--imspdr-foreground-fg2);
`;






