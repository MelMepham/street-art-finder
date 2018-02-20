import React from 'react'
import { addUser } from '../actions/index.js'
import {connect} from 'react-redux'

class AddProfileInfo extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        userName: '',
        profileImage: '',
        bio: '',
        instagram: '',
        twitter: '',
        website: '',
        facebook: '',
        contactInfo: ''
      }

      this.handleChange = this.handleChange.bind(this)
      this.submit = this.submit.bind(this)
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value})

    }

    submit(e) {
      e.preventDefault()
      this.props.dispatch(addUser(this.state))
      console.log('submit', this.state)
    }

  render() {
    return (
      <form>
        <label>Username</label>
        <input type="text" name="userName" onChange={this.handleChange} />

        <label>Profile Image</label>
        <input type="text" name="address" onChange={this.handleChange} />

        <label>Bio</label>
        <input type="text" name="artist" onChange={this.handleChange} />

        <label>Contact Info</label>
        <input type="text" name="contactInfo" onChange={this.handleChange} />

        <label>Website Link</label>
        <input type="text" name="website" onChange={this.handleChange} />

        <br />
        <label>Add Image</label>
        <input type="file" name="image" accept="image/*" />
        <br />

        <button onClick={this.submit}>Add Profile Info</button>

      </form>
    )
  }
}

export default connect()(AddProfileInfo)
