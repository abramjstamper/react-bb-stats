import React, { Component } from 'react';
import classNames from 'classnames';

class Modal extends Component {

  constructor() {
    super();
    this.state = {
      modalIsActive: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalIsActive: !this.state.modalIsActive });
  }

  render() {
    return (
      <div>
        <button className="button is-primary" onClick={() => this.toggleModal()}>{this.props.buttonLabel}</button>
        <div className="container">
          <div className={classNames("modal", { "is-active": this.state.modalIsActive || this.props.shouldOpen })}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">{this.props.title}</p>
                <button className="delete" aria-label="close" onClick={() => this.toggleModal()}></button>
              </header>
              <section className="modal-card-body">
                {this.props.body}
              </section>
              <footer className="modal-card-foot">
                <button className="button is-success" type="submit" onClick={() => this.toggleModal()}>Save changes</button>
                <button className="button" onClick={() => this.toggleModal()}>Cancel</button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Modal;