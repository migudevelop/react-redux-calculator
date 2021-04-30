import { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toogleTheme } from 'redux/actions/stylesActions'
import {
  InputStyled,
  ThemeSwitchButtonStyled,
  ThemeItemStyled,
  CircleItemStyled,
} from './styles'

const ThemeSwitchButton = ({ id, toogleTheme }) => {
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = (e) => {
    toogleTheme()
    setIsChecked(e.target.checked)
  }
  return (
    <ThemeSwitchButtonStyled isChecked={isChecked}>
      <InputStyled
        id={id}
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
        readOnly={true}
      />
      <ThemeItemStyled htmlFor={id}>
        <CircleItemStyled isChecked={isChecked}>
          {isChecked ? '🌞' : '🌙'}
        </CircleItemStyled>
      </ThemeItemStyled>
    </ThemeSwitchButtonStyled>
  )
}

ThemeSwitchButton.propTypes = {
  id: PropTypes.string,
}

ThemeSwitchButton.defaultProps = {
  id: 'themeSwitch',
}

const mapDispatchToProps = (dispatch) => {
  return {
    toogleTheme: () => dispatch(toogleTheme()),
  }
}

export default connect(null, mapDispatchToProps)(ThemeSwitchButton)
