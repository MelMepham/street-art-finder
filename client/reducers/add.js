function addArt (state = [], action) {
  switch(action.type) {
    case 'ADD_ART':
      return [...state, action.artDetails]

    default:
      return state
  }
}

export default addArt

