import React, { Component } from "react";
import ReactDOM from "react-dom";
import Hello from './Hello';

class HelloContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hello Peter jai"
    };
  }

  render() {

    return (
      <Hello { ...this.state } />
    );
  }
}
export default HelloContainer;
