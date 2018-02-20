import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_ARTINFO = 'RECEIVE_ARTINFO'

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const recieveArtInfo = (artInfo) => {
  console.log({artInfo})
  return {
    type: RECEIVE_ARTINFO,
    artInfo
  }
}

export function getArtInfo (artInfo) {
  return (dispatch) => {
    return request
      .get(`/api/v1/art`)
      .then(res => {
        console.log(res.body)
        dispatch(recieveArtInfo(res.body.art))
      })
      .catch(err => {
        console.log({err});
        dispatch(showError(err.message))

export const addNewArt= (artDetails) => {
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
