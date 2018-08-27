import React, { Component } from "react";
import { getTime } from "../timeHelpers";

class Time extends Component {
  render() {
    return <div>{getTime(12)}</div>;
  }
}

export default Time;
