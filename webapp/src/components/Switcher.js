import React from 'react';
import { connect } from 'react-redux';
import {componentMap} from '../reducers/routes';

const Switcher = (component) => {
  const TheSwitcher = componentMap[component.routes.name];
  return TheSwitcher ? <TheSwitcher /> : null;
};

const mapStateToProps = state => state;
export default connect(mapStateToProps, {})(Switcher);