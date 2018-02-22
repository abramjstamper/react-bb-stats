import React, { Component } from 'react';
import CreateTeamForm from './createTeamForm';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class CreateTeam extends Component {

  constructor() {
    super();
    this.state = {};
  }

  submit = (values) => {
    console.log(values);
    this.props.toggleModal();
    console.log(this.props.form.createTeamForm);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className={classNames("modal", { "is-active": this.props.isActive })}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <CreateTeamForm toggleModal={this.props.toggleModal} onSubmit={this.submit} values={this.props.form}/>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {})(CreateTeam);
