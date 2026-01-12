import { ThemeToggleButton, Typography } from '@imspdr/ui';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  HeaderContainer,
  HeaderContent,
  RightSection,
  SignOutButton,
  TitleButton,
  TitleSection,
} from './styled';

interface HeaderProps {
  onHomeClick?: () => void;
}

const Header = ({ onHomeClick }: HeaderProps) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    } else {
      window.location.href = '/';
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
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
            <SignOutButton onClick={logout}>
              <Typography variant="caption" style={{ color: 'var(--imspdr-foreground-fg3)' }}>
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
