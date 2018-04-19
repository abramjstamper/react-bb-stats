import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxScore from './BoxScore';

class Reports extends Component {

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Reports for {this.props.homeTeam.teamName} Vs. {this.props.awayTeam.teamName} ({this.props.game.info.date})
            </h1>
            <h2 className="subtitle">
              {this.props.homeTeam.teamName}
            </h2>
            <BoxScore game={this.props.game} team={this.props.homeTeam}/>
            <br/><br/>
            <h2 className="subtitle">
              {this.props.awayTeam.teamName}
            </h2>
            <BoxScore game={this.props.game} team={this.props.awayTeam}/>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => { return { games: state.games, teams: state.teams } };
export default connect(mapStateToProps)(Reports);
