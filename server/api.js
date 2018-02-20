import request from 'superagent'

export const addNewArt = (artDetails) => {
  return {
    type: 'ADD_ART',
    artDetails
  }
}

export function addArt(artDetails) {
  return (dispatch) => {
    return request
      .post('/api/v1/art')
      .send(artDetails)
      .then(res => {
        dispatch(addNewArt(res.body))
          .catch(err => {
            dispatch(err.message)
          })
      })
  }
}

export const addNewUser = (userDetails) => {
  return {
    type: 'ADD_USER',
    userDetails
  }
}

export function addUser(userDetails) {
  return (dispatch) => {
    return request
      .post('/api/v1/users')
      .send(userDetails)
      .then(res => {
        dispatch(addNewUser(res.body))
          .catch(err => {
            dispatch(err.message)
          })
      })
  }
}
