import styled from '@emotion/styled';
import { Button } from '@imspdr/ui';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--imspdr-background-bg1);
  border-bottom: 1px solid var(--imspdr-background-bg3);
  z-index: 1000;
  box-sizing: border-box;
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 16px;
`;
