import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateClock } from '../../actions/actionCreators';
import ChevronUpIcon from 'mdi-react/ChevronUpIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

class Timer extends Component {
  constructor() {
    super();

    this.timer = {};
    this.timer = this.createTimer(15);
  }

  componentWillMount() {
    this.gameId = this.props.location.payload.id;
    this.game = this.props.games[this.props.location.payload.id];
  }

  createTimer = (timeInSeconds) => {
    if (!timeInSeconds) { timeInSeconds = 0; }

    return {
      displayTime: this.getSecondsAsDigitalClock(timeInSeconds),
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
    this.props.updateClock(this.game, { displayTime: this.timer.displayTime, runTimer: false });
    this.forceUpdate();
  }

  timerTick = () => {
    setTimeout(() => {
      if (!this.timer.runTimer || this.timer.secondsRemaining < 0) { return; }
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

  adjustTimer = (amount) => {
    if (this.timer.secondsRemaining + amount > 0) {
      this.timer.secondsRemaining += amount;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      this.props.updateClock(this.game, { displayTime: this.timer.displayTime, runTimer: this.timer.runTimer });
      this.forceUpdate();
    }
  }

  getSecondsAsDigitalClock = (inputSeconds) => {
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

  renderTimerSwitch = () => {
    if (this.timer.runTimer) {
      return (<button className="button" onClick={() => this.pauseTimer()}>Stop Clock</button>);
    } else {
      return (<button className="button" onClick={() => this.startTimer()}>Start Clock</button>);
    }
  }

  renderSecondsButtons = () => {
    return (
      <div>
        <button className="button" onClick={() => this.adjustTimer(1)} ><ChevronUpIcon /></button>
        <button className="button" onClick={() => this.adjustTimer(-1)} ><ChevronDownIcon /></button>
      </div>
    );
  }

  renderMinutesButtons = () => {
    return (
      <div>
        <button className="button" onClick={() => this.adjustTimer(60)} ><ChevronUpIcon /></button>
        <button className="button" onClick={() => this.adjustTimer(-60)} ><ChevronDownIcon /></button>
      </div>
    );
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content has-text-centered columns">
            <div className="column">
              {this.renderMinutesButtons()}
            </div>
            <div className="column">
              {this.renderTimerSwitch()}
            </div>
            <div className="column">
              {this.renderSecondsButtons()}
            </div>
          </div>
          <div className="content has-text-centered is-size-5">{this.props.games[this.props.location.payload.id].clock.displayTime}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, location: state.location } };
export default connect(mapStateToProps, { updateClock })(Timer);
