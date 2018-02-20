import {combineReducers} from 'redux'

import ErrorMessage from './error-message'
import artInfo from './artInfo'
import add from './add'
import usersInfo from './usersInfo'

export default combineReducers({
  ErrorMessage,
  artInfo,
  usersInfo,
  add
})
