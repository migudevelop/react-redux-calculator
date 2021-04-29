import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import Header from 'components/Header'
import Layout from 'components/Layout'
import 'App.css'

const App = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <Layout />
  </ThemeProvider>
)

App.propTypes = {
  theme: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  theme: state.styles.theme,
})

const AppConnected = connect(mapStateToProps, null)(App)
export default AppConnected
