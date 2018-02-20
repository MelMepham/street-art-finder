import request from 'superagent'

export const addNewArt = (artDetails) => {
  console.log('action', artDetails)
  return {
    type: 'ADD_ART',
    artDetails
  }
}

export function addArt(artDetails) {
  console.log('actions', artDetails)
  return (dispatch) => {
    console.log('test2')
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
