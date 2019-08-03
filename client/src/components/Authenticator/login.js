import React, { Component } from "react";
import { TextInput, Button, Container } from "react-materialize";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';

class Loginmodal extends Component {
  state = {
    loginstate: false,
    email: '',
    password: '',
    msg: null
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  };

  onClick = e => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    // Attempt to login
    this.props.login(user);
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (!this.state.loginstate) {
      if (isAuthenticated) {
        this.setState({ loginstate: true });
      }
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  render() {
    return (
      <Container>
         {this.state.msg ? (
          <h5 className=" red-text">{this.state.msg}!</h5>
        ) : null}
        {this.state.loginstate ? (
          <h5 className=" green-text">{"Login Successfuly!"}!</h5>
        ) : (
          false
        )}
      <div className="Login">
        <br />
        <TextInput
            icon="email"
            name="email"
            id="email"
            email
            validate
            label="Email"
            onChange={this.onChange}
          />
          <br />
          <TextInput
            icon="lock"
            password
            name="password"
            id="password"
            label="Password"
            onChange={this.onChange}
          />
          <Button
            onClick={this.onClick}
            type="submit"
            waves="light"
            style={{ margin: 10 }}
          >
            Login
          </Button>
        <br />
      </div>
      </Container>
      
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default connect(
  mapStateToProps,
  { login }
)(Loginmodal);
