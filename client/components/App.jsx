import React from 'react'
import {connect} from 'react-redux'



function App (props) {
    return (
    <div>
        <h1>Hello World</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(App)
