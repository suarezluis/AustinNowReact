import React, { Component } from "react";
import { getTime } from "../timeHelpers";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 12,
      time: getTime(12)
    };
    this.interval = setInterval(() => {
      this.setState({ time: getTime(12) });
    }, 1000);
  }
  render() {
    return <div>{this.state.time}</div>;
  }

  // setting up interval for live time display
  componentDidMount() {
    this.interval;
  }

  //clear the interval before unmounting
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Time;
