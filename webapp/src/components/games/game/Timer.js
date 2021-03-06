import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateClock } from '../../../actions/actionCreators';
import { ChevronUpIcon, ChevronDownIcon, AutorenewIcon } from 'mdi-react';

//FIXME: Should come from the rule set
const TIME_LEFT_IN_SECONDS = 30;
const MAX_PERIOD = 4;

class Timer extends Component {

  constructor() {
    super();

    this.timer = {};
    this.timer = this.createTimer(TIME_LEFT_IN_SECONDS);
    this.period = 1;
  }

  componentWillMount() {
    if (Object.keys(this.props.game.clock).length === 0) {
      this.props.updateClock(this.props.game, { displayTime: this.timer.displayTime, seconds: this.timer.seconds, period: this.period, runTimer: this.timer.runTimer });
    } else {
      this.createTimer(this.props.game.clock.seconds);
      this.period = this.props.game.clock.period;
    }
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
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  pauseTimer = () => {
    this.timer.runTimer = false;
    this.props.updateClock(this.props.game, { displayTime: this.timer.displayTime, period: this.period, runTimer: false });
  }

  timerTick = () => {
    setTimeout(() => {
      if (!this.timer.runTimer || this.timer.secondsRemaining < 0) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      this.props.updateClock(this.props.game, { displayTime: this.timer.displayTime, period: this.period, runTimer: true });

      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.runTimer = false;
        this.timer.hasFinished = true;
        this.props.updateClock(this.props.game, { displayTime: this.timer.displayTime, period: this.period, runTimer: this.timer.runTimer });
      }
    }, 1000);
  }

  adjustTimer = (amount) => {
    if (this.timer.secondsRemaining + amount > 0 && this.timer.seconds >= this.timer.secondsRemaining + amount) {
      this.timer.secondsRemaining += amount;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      this.props.updateClock(this.props.game, { displayTime: this.timer.displayTime, period: this.period, runTimer: this.timer.runTimer });
    }
  }

  newPeriod = () => {
    if (this.period < MAX_PERIOD) {
      this.period = this.period + 1;
      this.timer = this.createTimer(TIME_LEFT_IN_SECONDS);
      this.props.updateClock(this.props.game, { displayTime: this.timer.displayTime, period: this.period, runTimer: this.timer.runTimer });
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
    if (this.timer.hasStarted) {
      if (this.timer.runTimer) {
        return (<button className="button is-danger" onClick={() => this.pauseTimer()}>Stop Clock</button>);
      } else {
        if (this.timer.hasFinished) {
          return (<button className="button is-warning" onClick={() => this.newPeriod()}>Start New Period</button>);
        } else {
          return (<button className="button is-success" onClick={() => this.startTimer()}>Start Clock</button>);
        }
      }
    } else {
      return (<button className="button is-success" onClick={() => this.startTimer()}>Begin Period</button>);
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
              <button className="button" onClick={this.props.flipSideAction}><AutorenewIcon /></button>
            </div>
            <div className="column">
              {this.renderSecondsButtons()}
            </div>
          </div>
          <div className="content has-text-centered is-size-5">{this.props.game.clock.period} - {this.props.game.clock.displayTime}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { updateClock })(Timer);
