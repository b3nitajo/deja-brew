import React, { Component } from "react";
import { Navbar, NavItem, Modal } from "react-materialize";
import "components/Navbar/Navbar.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Login from "../Authenticator/login";
import Signup from "../Authenticator/singup";
import Logout from "../Authenticator/logout";

class AppNavbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        <Navbar className="navbar" alignLinks="right">
          <NavItem href="/welcome">
            Welcome
          </NavItem>
          <Logout />

        </Navbar>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <Navbar className="navbar" alignLinks="right">
        <NavItem href="#modal1" className="modal-trigger">
          Login
        </NavItem>
        <Modal id="modal1" header="Login">
          <Login />
        </Modal>

        <NavItem href="#modal2" className="modal-trigger">
          Sign up
        </NavItem>
        <Modal id="modal2" header="Register">
          <Signup />
        </Modal>
        </Navbar>
      </React.Fragment>
    );

    return (
      <div>
       
          {isAuthenticated ? authLinks : guestLinks}
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);
