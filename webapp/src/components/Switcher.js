import React from 'react';
import { connect } from 'react-redux';
import {componentMap} from '../reducers/routes';

const Switcher = (component) => {
  const TheSwitcher = componentMap[component.name];
  return TheSwitcher ? <TheSwitcher /> : null;
};

const mapStateToProps = state => state.routes;
export default connect(mapStateToProps, {})(Switcher);