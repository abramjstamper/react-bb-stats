import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Game from './game/Game';
import Edit from './edit/Edit';
import Teams from './teams/Teams';
import Info from './info/Info';
import Reports from './reports/Reports';

class Games extends Component {

  constructor() {
    super();
    this.state = {
      currentTab: 4,
      tabs: {
        "GAME": 0,
        "EDIT": 1,
        "TEAMS": 2,
        "INFO": 3,
        "REPORTS": 4
      }
    }
  }

  setTab = (tabName) => {
    this.setState({ currentTab: this.state.tabs[tabName] });
  }

  renderTabComponent = () => {
    switch (this.state.currentTab) {
      case this.state.tabs["GAME"]:
        return (<Game game={this.game} homeTeam={this.homeTeam} awayTeam={this.awayTeam} />);
      case this.state.tabs["EDIT"]:
        return (<Edit game={this.game} homeTeam={this.homeTeam} awayTeam={this.awayTeam} />);
      case this.state.tabs["TEAMS"]:
        return (<Teams />);
      case this.state.tabs["INFO"]:
        return (<Info game={this.game} homeTeam={this.homeTeam} awayTeam={this.awayTeam} />);
      case this.state.tabs["REPORTS"]:
        return (<Reports game={this.game} homeTeam={this.homeTeam} awayTeam={this.awayTeam} />);
      default:
        return (<Info game={this.game} homeTeam={this.homeTeam} awayTeam={this.awayTeam} />);
    }
  }

  componentWillMount() {
    this.gameId = this.props.location.payload.id;
    this.game = this.props.games[this.props.location.payload.id];
    this.homeTeam = this.props.teams[this.game.info.homeTeam];
    this.awayTeam = this.props.teams[this.game.info.awayTeam];
  }

  render() {
    return (
      <div>
        <div className="tabs is-centered is-large">
          <ul>
            <li className={classNames({ "is-active": this.state.currentTab === this.state.tabs["GAME"] })} onClick={() => this.setTab("GAME")}><a>Game</a></li>
            <li className={classNames({ "is-active": this.state.currentTab === this.state.tabs["EDIT"] })} onClick={() => this.setTab("EDIT")}><a>Edit</a></li>
            <li className={classNames({ "is-active": this.state.currentTab === this.state.tabs["TEAMS"] })} onClick={() => this.setTab("TEAMS")}><a>Teams</a></li>
            <li className={classNames({ "is-active": this.state.currentTab === this.state.tabs["INFO"] })} onClick={() => this.setTab("INFO")}><a>Info</a></li>
            <li className={classNames({ "is-active": this.state.currentTab === this.state.tabs["REPORTS"] })} onClick={() => this.setTab("REPORTS")}><a>Reports</a></li>
          </ul>
        </div>
        {this.renderTabComponent()}
      </div>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams, location: state.location } };
export default connect(mapStateToProps)(Games);
