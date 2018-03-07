import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextField from '../form/textField';
import Modal from '../uiElements/modal';
import { createNewGame } from '../../actions/actionCreators';
import { reset } from 'redux-form';

class CreateGameForm extends Component {

  submit = (e) => {
    e.preventDefault();
    const submitData = this.props.form.createNewGame.values;
    if(typeof submitData !== 'undefined'){
      console.log(submitData);
      submitData.seasonId = this.props.location.payload.id;
    }
    this.props.createNewGame(submitData);
    this.props.reset("createNewGame");
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <Modal
          title={"New Game"}
          body={
            <div>
              <TextField fieldName="date" label="Date" />
              <TextField fieldName="time" label="Time" />
              <TextField fieldName="location" label="Location" />
              <div className="control">
                <label className="label">Home Team</label>
                <div className="select">
                  <Field name="homeTeam" className="input" component="select">
                    { Object.keys(this.props.teams).map((team, i) => <option key={i} value={team}>{this.props.teams[team].teamName}</option>)}
                  </Field>
                </div>
              </div>
              <div className="control">
              <label className="label">Away Team</label>
                <div className="select">
                  <Field name="awayTeam" className="input" component="select">
                    { Object.keys(this.props.teams).map((team, i) => <option key={i} value={team}>{this.props.teams[team].teamName}</option>)}
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