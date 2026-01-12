import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--imspdr-background-bg1);
  border-bottom: 1px solid var(--imspdr-background-bg3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 1000;
  box-sizing: border-box;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
`;

export const TitleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--imspdr-foreground-fg1);
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;


export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 16px;
`;

export const LoginButton = styled.button`
  background: var(--imspdr-primary-main);
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover: hover) {
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--imspdr-border-border2);
`;

export const SignOutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;
