import React from 'react'
import {connect} from 'react-redux'
import Gallery from './Gallery'
import Add from './Add'
import ProfileDetails from './ProfileDetails'
import AddProfileInfo from './AddProfileInfo'

import ErrorMessage from './ErrorMessage'
import {getArtInfo} from '../actions/index'
import {getUsersInfo} from '../actions/index'


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(getArtInfo())
    this.props.dispatch(getUsersInfo())
  }
  // <Gallery />

  render () {
    return (
      <div>
          <h1>Hello World</h1>
          <Add />
          <ErrorMessage />
          <ProfileDetails />
          <AddProfileInfo />
      </div>
    )
  }
}

export default connect()(App)
