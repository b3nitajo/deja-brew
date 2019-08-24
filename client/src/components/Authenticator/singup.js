import React, { Component } from "react";
import { TextInput, Button, Container } from "react-materialize";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";


class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    registered: false,
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (!this.state.registered) {
      if (isAuthenticated) {
        this.setState({ registered: true });
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      password
    };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <Container>
        {this.state.msg ? (
          <h5 className=" red-text">{this.state.msg}!</h5>
        ) : null}
        {this.state.registered ? (
          <h5 className=" green-text">{"Registered Successfuly!"}!</h5>
        ) : (
          false
        )}

        <div className="SignupForm">
          <br />
          <TextInput
            icon="add"
            label="Name"
            name="name"
            id="name"
            onChange={this.onChange}
          />
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
            Sign up
          </Button>
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
  { register }
)(SignupForm);
