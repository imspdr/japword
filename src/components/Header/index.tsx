import { ThemeToggleButton, Typography } from '@imspdr/ui';
import { useNavigate } from 'react-router-dom';

import { useAuth, logout } from '../../hooks/useAuth';
import {
  HeaderContainer,
  HeaderContent,
  RightSection,
  TitleButton,
  TitleSection,
  SignOutButton
} from './styled';

interface HeaderProps {
  onHomeClick?: () => void;
}

const Header = ({ onHomeClick }: HeaderProps) => {
  const navigate = useNavigate();
  const user = useAuth();

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    } else {
      window.location.href = '/';
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <TitleSection>
          <TitleButton onClick={handleHomeClick}>
            <Typography variant="title" level={2}>
              일본어 연습
            </Typography>
          </TitleButton>
        </TitleSection>
        <RightSection>
          {user && (
            <SignOutButton onClick={handleLogout}>
              <Typography variant="body" size="medium" color="default">
                로그아웃
              </Typography>
            </SignOutButton>
          )}
          <ThemeToggleButton />
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
