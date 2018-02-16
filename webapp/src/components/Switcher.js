import React from 'react';
import { connect } from 'react-redux';
import universal from 'react-universal-component';

const UniversalComponent = universal(props => import(`./${props.page}/${props.page}`), {
  minDelay: 1000,
  loading: () => (
    <a className="button is-centered is-primary is-loading">
      Button
    </a>
  ),
  error: () => <h1 className="is-centered">PAGE NOT FOUND - 404</h1>
});

const Switcher = ({ page }) => (
  <div>
    <UniversalComponent page={page} />
  </div>
)

const mapStateToProps = state => ({
  page: state.page
});

export default connect(mapStateToProps)(Switcher);
