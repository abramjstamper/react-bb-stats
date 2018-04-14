import React, { Component } from 'react';
import classNames from 'classnames';
import ChevronUpIcon from 'mdi-react/ChevronUpIcon';

class Dropdown extends Component {

  constructor(){
    super();
    this.state = { isOpen: false }
  }

  toggleState = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <div className={classNames("dropdown is-up", { "is-active": this.state.isOpen})}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={() => this.toggleState()}>
            <span>{this.props.name}</span>
            <ChevronUpIcon />
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="dropdown-content" onClick={() => this.toggleState()}>
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
};

export default Dropdown;