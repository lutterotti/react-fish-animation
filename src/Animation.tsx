import React, { Component } from "react";

class Animation extends Component {
  componentDidMount() {
    console.log('hello');
  }

  render() {
    return (<div style={{ width: "100%", height: "100%", border: "1px solid red" }}></div>)
  }
}

export default Animation;