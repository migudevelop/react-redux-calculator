import styled from 'styled-components'
import Button from 'components/Button'
import NumberButtons from 'components/CalculatorButtons/NumberButtons'

export const CalculatorButtonsStyled = styled.div`
  display: flex;
  flex-flow: column;
`

export const RowStyled = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  justify-content: space-between;
`

export const NumberButtonsStyled = styled(NumberButtons)`
  flex: 0 1 74.6%;
`

export const ButtonStyled = styled(Button)`
  flex: 0 1 24%;
  margin: 0 0 0.2em;
`

export const ColumnSumMinusStyled = styled.div`
  flex: 0 1 24%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`

export const LargeButtonStyled = styled(ButtonStyled)`
  flex: 1;
`
export const CeroPointButtonStyled = styled(ButtonStyled)`
  margin-right: 0.25em;
`
