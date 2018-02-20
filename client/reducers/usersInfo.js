import {RECEIVE_USERSINFO} from '../actions/index'

function usersInfo (state = [], action) {
  switch (action.type) {
    case RECEIVE_USERSINFO:
    return [...action.usersInfo]

    default:
      return state
  }
}

export default usersInfo
