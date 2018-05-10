import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import FieldWrapper from '../elements/FieldWrapper';
import { editGameInfo } from '../../actions/actionCreators';

class EditGameForm extends Component {

  componentWillMount() {
    this.props.initialize(this.props.game.info);
    console.log(this.props.game);
  }

  cancel = (e) => {
    e.preventDefault();
    this.props.initialize(this.props.game.info);
  }

  submit = (e) => {
    e.preventDefault();
    const submitData = this.props.form.editGameInfo.values;
    if (typeof submitData !== 'undefined') {
      console.log(submitData);
      submitData.seasonId = this.props.location.payload.id;
    }
    this.props.editGameInfo(submitData);
  }

  render() {
    return (
      <form>
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
          <FieldWrapper fieldName="attendance" label="Attendance" />
          <FieldWrapper fieldName="notes" label="Notes" />
          <FieldWrapper fieldName="official1" label="Official 1" />
          <FieldWrapper fieldName="official2" label="Official 2" />
          <FieldWrapper fieldName="official3" label="Official 3" />
        </div>
        <div className="buttons is-right">
          <button className="button is-success" onClick={this.submit} type="submit">Save Changes</button>
          <button className="button is-danger" onClick={this.cancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => state;

EditGameForm = connect(
  mapStateToProps,
  {
    editGameInfo,
    reset
  }
)(EditGameForm);

export default reduxForm({ form: 'editGameInfo' })(EditGameForm);