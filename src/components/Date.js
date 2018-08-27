import React, { Component } from "react";
import { getFullDate } from "../timeHelpers";

class Date extends Component {
  render() {
    return <div>{getFullDate()}</div>;
  }
}

export default Date;
