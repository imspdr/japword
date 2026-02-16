import styled from '@emotion/styled';

export const CardContainer = styled.div`
  background: var(--imspdr-background-1);
  border: 1px solid var(--imspdr-background-3);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: var(--imspdr-background-2);
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
`;

export const MainWrapper = styled.div`
  & > * {
    font-weight: 700;
  }
`;

export const SubWrapper = styled.div`
  & > * {
    opacity: 0.8;
  }
`;

export const MeaningWrapper = styled.div`
  & > * {
    font-weight: 500;
  }
`;
