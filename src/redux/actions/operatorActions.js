import {
  ADD_NUMBER,
  RESET_VALUES,
  CALCULATE,
  ADD_OPERATOR,
  RESOLVE_CALC,
} from 'redux/types/operatorTypes'

export const calculate = () => ({
  type: CALCULATE,
})

export const addNumber = (value) => (dispatch) => {
  dispatch({
    type: ADD_NUMBER,
    payload: value,
  })
}

export const resetValues = () => (dispatch) => {
  dispatch({
    type: RESET_VALUES,
  })
}

export const resolveCalc = () => (dispatch) => {
  dispatch(calculate())
  dispatch({
    type: RESOLVE_CALC,
  })
}

export const addOperator = (operator) => (dispatch) => {
  dispatch(calculate())
  dispatch({
    type: ADD_OPERATOR,
    payload: operator,
  })
}
