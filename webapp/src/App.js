import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
// import { withRouter } from 'react-router-dom'
import Main from './components/Main';

function mapStateToProps(state) {
  console.log(state);
  return { teams : state.teams };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
