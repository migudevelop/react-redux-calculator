import { HeaderStyled, Title } from './styles'
import ThemeSwitchButton from 'components/ThemeSwitchButton'

const Header = () => (
  <HeaderStyled>
    <Title>Calculator</Title>
    <ThemeSwitchButton />
  </HeaderStyled>
)

Header.propTypes = {}

export default Header
