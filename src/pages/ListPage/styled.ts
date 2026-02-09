import styled from "@emotion/styled";

export const PageContainer = styled.div`
  padding: 10px 20px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GridList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  max-width: 1440px;

  @media (min-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LoadingContainer = styled.div`
  padding: 40px;
  text-align: center;
  color: var(--imspdr-foreground-2);
`;

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid var(--imspdr-background-3);
  border-radius: 12px;
  background: var(--imspdr-background-1);
  color: var(--imspdr-foreground-1);
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: var(--imspdr-primary-1);
  }

  &::placeholder {
    color: var(--imspdr-foreground-2);
  }
`;
