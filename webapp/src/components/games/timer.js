import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();

    // this.timer = {};
    // this.timer = this.createTimer(480);
    this.state = this.createTimer(480);

    this.createTimer = this.createTimer.bind(this);
    this.getSecondsAsDigitalClock = this.getSecondsAsDigitalClock.bind(this);
    this.timerTick = this.timerTick.bind(this);
  }

  createTimer = (timeInSeconds) => {
    if (!timeInSeconds) { timeInSeconds = 0; }

    return {
      displayTime: "not set",
      seconds: timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: timeInSeconds
    };
  }

  startTimer = () => {
    console.log("Timer started");
    this.setState({
      hasStarted: true,
      runTimer: true
    });
    this.timerTick();
  }

  pauseTimer = () => {
    this.setState({runTimer: false});
  }

  resumeTimer = () => {
    this.startTimer();
  }

  hasFinished = () => {
    return this.state.hasFinished;
  }

  getDisplayTime = () => {
    console.log("Get Display Time Called");
    return this.getSecondsAsDigitalClock(this.state.secondsRemaining);
  }

  timerTick() {
    setTimeout(() => {
      if (!this.state.runTimer) { return; }
      this.setState((prevState, props) => ({
        secondsRemaining: this.prevState.secondsRemaining--,
        displayTime: this.getSecondsAsDigitalClock(this.prevState.secondsRemaining)
      }));
      console.log("Timer Ticking")
      console.log(this.state.displayTime);
      if (this.state.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.setState({hasFinished: true});
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return minutesString + ':' + secondsString;
  }

  renderTimerSwitch = () => {
    if(this.state.hasStarted && !this.state.runTimer){
      return this.renderStartTimer();
    } else {
      return this.renderStartGame();
    }
  }

  renderStartGame = () => {
    return (
      <button className="button" onClick={() => this.startTimer()}>Start Game</button>
    );
  }

  renderStartTimer = () => {
    return (
      <div>
        <span>{this.state.displayTime}</span>
        <button className="button" onClick={() => this.startTimer()}>Start Timer</button>
      </div>
    );
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content has-text-centered">
            {this.renderTimerSwitch()}
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
