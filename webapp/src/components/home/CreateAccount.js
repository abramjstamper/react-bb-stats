import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import { push } from 'redux-first-router'
import FieldWrapper from '../elements/FieldWrapper';
import { createAccount } from '../../actions/actionCreators';

class CreateAccount extends Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit = (e) => {
    // e.preventDefault();
    this.props.createAccount(this.props.form.createAccount.values);
    this.props.reset("createAccount");
    if (typeof this.props.form.createAccount.values !== 'undefined') {
      push(`/dashboard`);
    }
  }

  render() {
    return (
      <form className="card" onSubmit={this.submit}>
        <header className="card-header">
          <p className="card-header-title">Create an Account</p>
        </header>
        <div className="card-content">
          <div className="content">
            <FieldWrapper fieldName="name" label="Name" type="text" />
            <FieldWrapper fieldName="email" label="Email" type="email" />
            <FieldWrapper fieldName="password" label="Password" type="password" />
            <FieldWrapper fieldName="passwordConfirmation" label="Password Confirmation" type="password" />
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item is-success" type="submit" onClick={() => this.submit()}>Create Account</a>
        </footer>
      </form>
    );
  }
}


const mapStateToProps = state => state;

CreateAccount = connect(
  mapStateToProps,
  {
    createAccount,
    reset
  }
)(CreateAccount);

export default reduxForm({ form: 'createAccount' })(CreateAccount);