import React, { Component } from "react";
import { TextInput, Button, Icon, Container, Modal } from "react-materialize";
// import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
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
    
      <Container>
      <div className="Login">
        <br />
        <TextInput icon="email" email validate label="Email" />
        <br />
        <TextInput icon="lock" password label="Password" />
        <br />
        <Button type="submit" waves="light" style={{margin: 10}}>
          Login
          <Icon right>add</Icon>
        </Button>
       
        <br />
      </div>
      </Container>
      
    );
  }
}

export default Login;
