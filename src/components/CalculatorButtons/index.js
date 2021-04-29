import { connect } from 'react-redux'
import {
  addNumber,
  addOperator,
  resetValues,
  resolveCalc,
} from 'redux/actions/operatorActions'
import {
  MULTIPLY,
  INCREMENT,
  PERCENTAGE,
  DECREMENT,
  DIVIDE,
} from 'redux/types/operatorTypes'
import {
  CalculatorButtonsStyled,
  RowStyled,
  ButtonStyled,
  NumberButtonsStyled,
  ColumnSumMinusStyled,
  LargeButtonStyled,
  CeroPointButtonStyled,
} from './styles'

const CalculatorButtons = ({
  addNumber,
  addOperator,
  resetValues,
  resolveCalc,
}) => {
  return (
    <CalculatorButtonsStyled>
      <RowStyled>
        <ButtonStyled onClick={() => resetValues()}>AC</ButtonStyled>
        <ButtonStyled onClick={() => addOperator(PERCENTAGE)}>%</ButtonStyled>
        <ButtonStyled onClick={() => addOperator(DIVIDE)}>/</ButtonStyled>
        <ButtonStyled onClick={() => addOperator(MULTIPLY)}>X</ButtonStyled>
      </RowStyled>
      <RowStyled>
        <NumberButtonsStyled />
        <ColumnSumMinusStyled>
          <LargeButtonStyled onClick={() => addOperator(DECREMENT)}>
            -
          </LargeButtonStyled>
          <LargeButtonStyled onClick={() => addOperator(INCREMENT)}>
            +
          </LargeButtonStyled>
        </ColumnSumMinusStyled>
      </RowStyled>
      <RowStyled>
        <CeroPointButtonStyled onClick={() => addNumber('.')}>
          .
        </CeroPointButtonStyled>
        <CeroPointButtonStyled onClick={() => addNumber(0)}>
          0
        </CeroPointButtonStyled>
        <LargeButtonStyled onClick={() => resolveCalc()}>=</LargeButtonStyled>
      </RowStyled>
    </CalculatorButtonsStyled>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (value) => dispatch(addNumber(value)),
    addOperator: (operator) => dispatch(addOperator(operator)),
    resetValues: () => dispatch(resetValues()),
    resolveCalc: () => dispatch(resolveCalc()),
  }
}

export default connect(null, mapDispatchToProps)(CalculatorButtons)
