import {
  MULTIPLY,
  INCREMENT,
  PERCENTAGE,
  DECREMENT,
  DIVIDE,
  ADD_NUMBER,
  RESET_VALUES,
  CALCULATE,
  ADD_OPERATOR,
  RESOLVE_CALC,
} from 'redux/types/operatorTypes'

export const INITIAL_STATE = {
  result: null,
  prevValue: null,
  resultDisplay: 0,
  operator: '',
}

const operatorReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_NUMBER:
      return {
        ...state,
        result: state.result !== null ? null : state.result,
        resultDisplay: `${
          state.resultDisplay === 0 ? '' : state.resultDisplay
        }${payload}`,
      }
    case ADD_OPERATOR:
      return {
        ...state,
        operator: payload,
        resultDisplay: 0,
      }
    case RESET_VALUES:
      return {
        ...INITIAL_STATE,
      }
    case RESOLVE_CALC:
      return {
        ...INITIAL_STATE,
        result: state.prevValue,
      }
    case CALCULATE:
      switch (state.operator) {
        case INCREMENT:
          return {
            ...state,
            prevValue: state.prevValue + parseFloat(state.resultDisplay),
          }
        case DECREMENT:
          return {
            ...state,
            prevValue: state.prevValue - parseFloat(state.resultDisplay),
          }
        case MULTIPLY:
          return {
            ...state,
            prevValue: state.prevValue * parseFloat(state.resultDisplay),
          }
        case DIVIDE:
          return {
            ...state,
            prevValue: state.prevValue / parseFloat(state.resultDisplay),
          }
        default:
          return { ...state, prevValue: parseFloat(state.resultDisplay) }
      }
    default:
      return { ...state }
  }
}

export default operatorReducer
