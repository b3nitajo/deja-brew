import React, { Component } from "react";
import axios from "axios";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event) {
  // 	this.setState({
  // 		[event.target.name]: event.target.value
  // 	})
  // }
  // handleSubmit(event) {
  // 	event.preventDefault()
  // 	console.log('sign-up-form, username: ');
  // 	console.log(this.state.username);
  // 	//request to server here
  // 	axios.post('/user/', {
  // 		username: this.state.username,
  // 		password: this.state.password
  // 	})
  // 		.then(response => {
  // 			console.log(response)
  // 			if (!response.data.errmsg) {
  // 				console.log('successful signup')
  // 				this.setState({
  // 					redirectTo: '/login'
  // 				})
  // 			} else {
  // 				console.log('username already taken')
  // 			}
  // 		})

  // }
  render() {
    return (
      <div className="SignupForm">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">
                Name
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="name"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">
            Email
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="email"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">
                Password:{" "}
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group ">
            <div className="col-7" />

            <button
              className="btn btn-primary col-1 col-mr-auto"
              onClick={this.handleSubmit}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
