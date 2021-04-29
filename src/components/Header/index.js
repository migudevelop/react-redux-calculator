import { HeaderStyled, Title } from './styles'
import SwitchButton from 'components/SwitchButton'

const Header = () => (
  <HeaderStyled>
    <Title>Calculator</Title>
    <SwitchButton />
  </HeaderStyled>
)

Header.propTypes = {}

export default Header
