import {RECEIVE_ARTINFO} from '../actions/index'

function artInfo (state = [], action) {
  console.log({action});
  console.log({RECEIVE_ARTINFO});
  switch (action.type) {
    case RECEIVE_ARTINFO:
    console.log({action});
    return [...action.artInfo]

    default:
      return state
  }
}

export default artInfo
