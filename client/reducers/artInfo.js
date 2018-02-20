import {RECEIVE_ARTINFO} from '../actions/index'

function artInfo (state = [], action) {
  switch (action.type) {
    case RECEIVE_ARTINFO:
    return [...action.artInfo]

    default:
      return state
  }
}

export default artInfo
