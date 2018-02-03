import React, { Component } from 'react';

class Timer extends Component {
  constructor(){
    super();
    this.state = {
      isPaused: true,
      time: 64000,
      period: 1
    };

    this.getSecondsAsDigitalClock = this.getSecondsAsDigitalClock.bind(this);
    this.timerTick = this.timerTick.bind(this);
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      }
      else {
        this.timer.hasFinished = true;
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

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content has-text-centered">
            <button className="button">Start Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
