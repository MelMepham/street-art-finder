import React from 'react'
import {connect} from 'react-redux'
import Gallery from './Gallery'


function App (props) {
    return (
    <div>
        <h1>Hello World</h1>
        <Gallery />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(App)
