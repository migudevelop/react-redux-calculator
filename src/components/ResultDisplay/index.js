import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ResultDisplayStyled, InputStyled } from './styles'

const ResultDisplay = ({
  className,
  type,
  disabled,
  readOnly,
  resultDisplay,
}) => {
  return (
    <ResultDisplayStyled>
      <InputStyled
        type={type}
        disabled={disabled}
        className={className}
        value={resultDisplay}
      />
    </ResultDisplayStyled>
  )
}

ResultDisplay.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
}

ResultDisplay.defaultProps = {
  type: 'text',
  disabled: true,
  readOnly: false,
}

const mapStateToProps = (state) => ({
  resultDisplay:
    state.operator.result !== null
      ? state.operator.result
      : state.operator.resultDisplay,
})

export default connect(mapStateToProps)(ResultDisplay)
