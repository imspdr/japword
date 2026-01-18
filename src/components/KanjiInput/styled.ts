import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid var(--imspdr-border-border1);
  border-radius: 8px;
  background-color: var(--imspdr-background-bg1);
  color: var(--imspdr-foreground-fg1);
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: var(--imspdr-mint-mint1);
    box-shadow: 0 0 0 2px var(--imspdr-mint-mint1)20;
  }
  
  &:disabled {
      background-color: var(--imspdr-background-bg3);
      cursor: not-allowed;
  }
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
  background-color: var(--imspdr-background-bg1);
  border: 1px solid var(--imspdr-border-border1);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
`;

export const SuggestionItem = styled.li<{ isSelected?: boolean }>`
  padding: 10px 12px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--imspdr-background-bg2)' : 'transparent'};
  color: var(--imspdr-foreground-fg1);
  transition: background-color 0.1s;

  &:hover {
    background-color: var(--imspdr-background-bg2);
  }
  
  &:active {
      background-color: var(--imspdr-mint-mint1)30;
  }
`;
