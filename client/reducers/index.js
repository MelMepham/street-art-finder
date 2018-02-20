import {combineReducers} from 'redux'

import ErrorMessage from './error-message'
import artInfo from './artInfo'
import add from './add'

export default combineReducers({
  ErrorMessage,
  artInfo,
  add
})
