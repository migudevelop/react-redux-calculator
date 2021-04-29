import PropTypes from 'prop-types'
import Calculator from 'components/Calculator'
import { LayoutStyled } from './styles'

const Layout = () => (
  <LayoutStyled>
    <Calculator />
  </LayoutStyled>
)

Layout.propTypes = {}

export default Layout
