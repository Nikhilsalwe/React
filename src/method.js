import React, { Component } from 'react';

class Method extends Component {

    myFacebookLink(){
        return "https://www.facebook.com/nikhilsalwe"
    }

    facebookUser(){
        return 'Nikhil Salwe'
    }

    render(){
      return(
          <div>
              <p> My FaceBook Id is: <a href={this.myFacebookLink()}>{this.facebookUser()}</a></p>
          </div>
      )
    }
  }

  export default Method; 