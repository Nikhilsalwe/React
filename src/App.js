import React, { Component } from 'react';
import './App.css'

class HelloWorldJSX extends Component {
  render(){
    return(
        <a href={this.props.link} style={{backgroundColor:'lightgrey'}}>{this.props.linkText}</a>
    )
  }
}
export default HelloWorldJSX;
