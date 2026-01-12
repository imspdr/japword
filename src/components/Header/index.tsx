import { ThemeToggleButton, Typography } from '@imspdr/ui';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  HeaderContainer,
  LoginButton,
  ProfileImage,
  RightSection,
  SignOutButton,
  TitleButton,
  TitleSection,
  UserProfile,
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
      <TitleSection>
        <TitleButton onClick={handleHomeClick}>
          <Typography variant="title" level={2}>
            일본어 연습
          </Typography>
        </TitleButton>
      </TitleSection>
      <RightSection>
        {user ? (
          <UserProfile>
            {user.photoURL && <ProfileImage src={user.photoURL} alt="Profile" />}
            <Typography variant="body" level={2} style={{ color: 'var(--imspdr-foreground-fg1)' }}>
              {user.displayName || user.email}
            </Typography>
            <SignOutButton onClick={logout}>
              <Typography variant="caption" style={{ color: 'var(--imspdr-foreground-fg3)' }}>
                로그아웃
              </Typography>
            </SignOutButton>
          </UserProfile>
        ) : (
          <LoginButton onClick={handleLoginClick}>
            <Typography variant="caption" level={2} style={{ color: 'white', fontWeight: 600 }}>
              로그인
            </Typography>
          </LoginButton>
        )}
        <ThemeToggleButton />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
