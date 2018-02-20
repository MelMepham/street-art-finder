import React from 'react'
import {connect} from 'react-redux'



function Gallery ({artInfo}) {

    return (
      <div>
        {artInfo.map(art => {
          console.log('artid',art.id)
        return (
          <b>{art.id}</b>
          )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    artInfo: state.artInfo
  }
}

export default connect(mapStateToProps)(Gallery)
