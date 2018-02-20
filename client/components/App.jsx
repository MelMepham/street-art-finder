import React from 'react'
import {connect} from 'react-redux'
import Gallery from './Gallery'
import Add from './Add'

import ErrorMessage from './ErrorMessage'
import {getArtInfo} from '../actions/index'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getArtInfo())
  }

  render () {
    return (
      <div>
          <h1>Hello World</h1>
          <Gallery />
          <Add />
          <ErrorMessage />
      </div>
    )
  }
}

export default connect()(App)
