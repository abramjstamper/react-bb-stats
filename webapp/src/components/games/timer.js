import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateClock } from '../../actions/actionCreators';

class Timer extends Component {
  constructor() {
    super();

    this.timer = {};
    this.timer = this.createTimer(15);

    this.createTimer = this.createTimer.bind(this);
    this.getSecondsAsDigitalClock = this.getSecondsAsDigitalClock.bind(this);
    this.timerTick = this.timerTick.bind(this);
  }

  componentWillMount() {
    this.gameId = this.props.location.payload.id;
    this.game = this.props.games[this.props.location.payload.id];
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
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  pauseTimer = () => {
    this.timer.runTimer = false;
  }

  resumeTimer = () => {
    this.startTimer();
  }

  hasFinished = () => {
    return this.timer.hasFinished;
  }

  getDisplayTime = () => {
    console.log("Get Display Time Called");
    return this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      this.props.updateClock(this.game, { displayTime: this.timer.displayTime, runTimer: true });
      console.log("Timer Ticking")
      console.log(this.timer.displayTime);
      this.forceUpdate();
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds) {
    var sec_num = parseInt(inputSeconds.toString(), 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    if (hours === 0)
      return minutesString + ':' + secondsString;
    else
      return hoursString + ':' + minutesString + ':' + secondsString;
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content has-text-centered">
            <button className="button" onClick={() => this.startTimer()}>Start Timer</button>
            <span>{this.props.games[this.gameId].clock.displayTime}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {return {games: state.games, location: state.location}};
export default connect(mapStateToProps, { updateClock })(Timer);
