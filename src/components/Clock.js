import React, { Component } from "react";

class Clock extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date(), timeString: "bn-BD" };
  //   this.changeTimeString=this.changeTimeString.bind(this)
  // }

     state = { date: new Date(), timeString: "bn-BD" };
  componentDidMount() {
    this.setTimer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    //   console.log('inside tick function',this)
    this.setState({ date: new Date() });
  }
  //   changeTimeString(){
  //         console.log("inside timer function", this);
  //       this.setState((value) => (
  //           {

  //         timeString: value.timeString == "bn-BD" ? "en-US" : "bn-BD",
  //       }));
  //   }
  changeTimeString = () => {
    console.log("inside timer function", this);
    this.setState((value) => ({
      timeString: value.timeString == "bn-BD" ? "en-US" : "bn-BD",
    }));
  }
  componentWillUnmount() {
    clearInterval(this.setTimer);
  }
  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString(this.state.timeString)}</h1>
        <button onClick={this.changeTimeString} className=' btn-small btn-dark'>Change Time String</button>
      </div>
    );
  }
}

export default Clock;
