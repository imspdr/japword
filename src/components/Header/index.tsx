import { ThemeToggleButton, Typography, Button } from '@imspdr/ui';
import { useNavigate } from 'react-router-dom';

import { useAuth, logout } from '../../hooks/useAuth';
import {
  HeaderContainer,
  HeaderContent,
  RightSection,
  TitleSection,
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
          <Button variant="ghost" onClick={handleHomeClick} style={{ backgroundColor: 'var(--imspdr-background-bg1)', border: 'none' }}>
            <Typography variant="title" level={2}>
              일본어 연습
            </Typography>
          </Button>
        </TitleSection>
        <RightSection>
          {user && (
            <Button variant="ghost" onClick={handleLogout} style={{ backgroundColor: 'var(--imspdr-background-bg1)', border: 'none' }}>
              <Typography variant="body" size="medium" color="default">
                로그아웃
              </Typography>
            </Button>
          )}
          <ThemeToggleButton />
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
