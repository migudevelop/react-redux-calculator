import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNumber } from 'redux/actions/operatorActions'
import { NumberButtonsStyled, ButtonStyled } from './styles'

const NumberButtons = ({ className, addNumber }) => {
  return (
    <NumberButtonsStyled className={className}>
      {Array.from({ length: 9 }, (v, i) => (
        <ButtonStyled key={i} onClick={() => addNumber(i + 1)}>
          {i + 1}
        </ButtonStyled>
      ))}
    </NumberButtonsStyled>
  )
}

NumberButtons.propTypes = {
  className: PropTypes.string,
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (value) => dispatch(addNumber(value)),
  }
}

export default connect(null, mapDispatchToProps)(NumberButtons)
