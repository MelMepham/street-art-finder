import React from 'react'
import {connect} from 'react-redux'



function ProfileDetails ({usersInfo}) {

    return (
      <div>
        {usersInfo.map(users => {
          console.log('userName',users.userName)
        return (
          <b>{users.userName}</b>
          )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    usersInfo: state.usersInfo
  }
}

export default connect(mapStateToProps)(ProfileDetails)
