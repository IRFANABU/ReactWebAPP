import React, { Component } from 'react'

 class About extends Component {
  
  render() {
    return (
      <div>
        <h1>Its our About Page</h1>
        {this.props.children}
      </div>
    )
  }
}
export default About;