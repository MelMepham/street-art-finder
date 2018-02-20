import React from 'react'
import { addArt } from '../actions/index.js'
import {connect} from 'react-redux'

class Add extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        suburb: '',
        address: '',
        artist: '',
        style: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.submit = this.submit.bind(this)
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value})

    }

    submit(e) {
      e.preventDefault()
      this.props.dispatch(addArt(this.state))
      console.log('submit', this.state)
    }

  
  render() {
    console.log(this.state)
    return (
      <form>
        <label>Suburb</label>
        <input type="text" name="suburb" onChange={this.handleChange} />

        <label>Address</label>
        <input type="text" name="address" onChange={this.handleChange} />

        <label>Artist</label>
        <input type="text" name="artist" onChange={this.handleChange} />

        <label>Description</label>
        <input type="text" name="descr" onChange={this.handleChange} />

        <label>Style</label>
        <select name="style" onChange={this.handleChange} >
          <option>Art Deco</option>
          <option>Abstract</option>
          <option>Realistic</option>
        </select>

        <button onClick={this.submit}>Add Art</button>

      </form>
    )
  }
}

export default connect()(Add)