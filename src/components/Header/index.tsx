import { AutoComplete, ThemeToggleButton, Typography } from '@imspdr/ui';
import { HeaderContainer, RightSection, SearchWrapper, TitleButton, TitleSection } from './styled';
import { useDeviceType } from '@imspdr/ui';

interface HeaderProps {
  onHomeClick?: () => void;
  searchOptions?: any[];
  onSearchSelect?: (option: any) => void;
}

const Header = ({ onHomeClick, searchOptions = [], onSearchSelect }: HeaderProps) => {
  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    } else {
      window.location.href = '/';
    }
  };
  const { isPc } = useDeviceType();
  return (
    <HeaderContainer>
      <TitleSection>
        <TitleButton onClick={handleHomeClick}>
          <Typography variant="title" level={2}>
            JAPANESE PRACTICE
          </Typography>
        </TitleButton>
      </TitleSection>
      <RightSection>
        <ThemeToggleButton />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
