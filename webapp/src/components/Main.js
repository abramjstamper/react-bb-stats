import React, { Component } from 'react';
import Navbar from './navbar';

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* {cloneElement({...this.props}.children, {...this.props})} */}
      </div>
    )
  }
}

export default Main;
