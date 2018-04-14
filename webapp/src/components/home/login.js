import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import { push } from 'redux-first-router'
import FieldWrapper from '../elements/FieldWrapper';
import { login } from '../../actions/actionCreators';

class Login extends Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit = (e) => {
    // e.preventDefault();
    this.props.login(this.props.form.loginForm.values);
    this.props.reset("loginForm");
    if (typeof this.props.form.loginForm.values !== 'undefined') {
      push(`/dashboard`);
    }
  }

  render() {
    return (
      <form className="card" onSubmit={this.submit}>
        <header className="card-header">
          <p className="card-header-title">Returning User?</p>
        </header>
        <div className="card-content">
          <div className="content">
            <FieldWrapper fieldName="email" label="Email" type="email" />
            <FieldWrapper fieldName="password" label="Password" type="password" />
          </div>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item is-success" type="submit" onClick={() => this.submit()}>Login</a>
        </footer>
      </form>
    );
  }
}


const mapStateToProps = state => state;

Login = connect(
  mapStateToProps,
  {
    login,
    reset
  }
)(Login);

export default reduxForm({ form: 'loginForm' })(Login);