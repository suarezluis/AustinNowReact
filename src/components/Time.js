import React, { Component } from "react";
import { getTime } from "../timeHelpers";

class Time extends Component {
  render() {
    return <div>{this.props.time}</div>;
  }
}

export default Time;
