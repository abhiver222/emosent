import React, {Component} from 'react';
import axios from 'axios'

class VidComp extends Component{

  constructor() {
    super()
    this.state = {
      res: null
    }
  }

  componentWillMount(){
    axios.get("http://localhost:9000/testAPI")
    .then(res => {
      console.log(res)
      this.setState({res: res.data})})
  }

  render(){
    console.log(this.state)
    return (
      <div><b>{this.state.res}</b></div>
    )
  }
}

export default VidComp
