import { combineReducers } from 'redux'
import { operatorReducer, stylesReducer } from 'redux/reducers'

export { default as operatorReducer } from './operatorReducer'
export { default as stylesReducer } from './stylesReducer'

export default combineReducers({
  operator: operatorReducer,
  styles: stylesReducer,
})
