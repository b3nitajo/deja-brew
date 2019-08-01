import React, { Component } from 'react';
import { NavItem} from 'react-materialize';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <NavItem onClick={this.props.logout} href='#'>
          Logout
        </NavItem>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
