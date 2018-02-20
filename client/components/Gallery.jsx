import React from 'react'
import {connect} from 'react-redux'



function Gallery (props) {
    return (
    <div>
        <h1>Gallery</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Gallery)
