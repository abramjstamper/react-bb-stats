import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { push } from 'redux-first-router'
import FieldWrapper from '../elements/FieldWrapper';
import Modal from '../elements/Modal';
import { createNewGame } from '../../actions/actionCreators';

class CreateGameForm extends Component {

  submit = (e) => {
    e.preventDefault();
    const submitData = this.props.form.createNewGame.values;
    if (typeof submitData !== 'undefined') {
      console.log(submitData);
      submitData.seasonId = this.props.location.payload.id;
    }
    this.props.createNewGame(submitData);
    this.props.reset("createNewGame");
    if (typeof submitData !== 'undefined') {
      push(`/seasons/${submitData.seasonId}/games/3`);
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <Modal
          title={"New Game"}
          body={
            <div>
              <FieldWrapper fieldName="date" label="Date" />
              <FieldWrapper fieldName="time" label="Time" />
              <FieldWrapper fieldName="location" label="Location" />
              <div className="control">
                <label className="label">Home Team</label>
                <div className="select">
                  <Field name="homeTeam" className="input" component="select">
                    {Object.keys(this.props.teams).map((team, i) => <option key={i} value={team}>{this.props.teams[team].teamName}</option>)}
                  </Field>
                </div>
              </div>
              <div className="control">
                <label className="label">Away Team</label>
                <div className="select">
                  <Field name="awayTeam" className="input" component="select">
                    {Object.keys(this.props.teams).map((team, i) => <option key={i} value={team}>{this.props.teams[team].teamName}</option>)}
                  </Field>
                </div>
              </div>
            </div>
          }
          buttonLabel={"Create Game"}
        />
      </form>
    );
  }
}

const mapStateToProps = state => state;

CreateGameForm = connect(
  mapStateToProps,
  {
    createNewGame,
    reset
  }
)(CreateGameForm);

export default reduxForm({ form: 'createNewGame' })(CreateGameForm);