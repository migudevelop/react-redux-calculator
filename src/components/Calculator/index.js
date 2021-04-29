import PropTypes from 'prop-types'
import { CalculatorStyled } from './styles'
import ResultDisplay from 'components/ResultDisplay'
import CalculatorButtons from 'components/CalculatorButtons'

const Calculator = ({ className }) => {
  return (
    <CalculatorStyled>
      <ResultDisplay />
      <CalculatorButtons />
    </CalculatorStyled>
  )
}

Calculator.propTypes = {
  className: PropTypes.string,
}

export default Calculator
