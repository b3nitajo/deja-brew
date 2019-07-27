import React from 'react';
import { Navbar, NavItem, Modal} from 'react-materialize';
import 'components/Navbar/Navbar.css'
import Login from "../Authenticator/login"
import Signup from "../Authenticator/singup"
import  Logout from "../Authenticator/logout"

function Nav() {
  return (
    <React.Fragment>
      <Navbar className="navbar"  alignLinks="right">
<NavItem href="#modal1" className="modal-trigger">
Login
<Modal id="modal1" header="Login"><Login /></Modal>
</NavItem >

<NavItem href="#modal2" className="modal-trigger">
<Modal id="modal2" header="Register"><Signup /></Modal>
Sign up
</NavItem>
<Logout />
</Navbar>
</React.Fragment>
  );
}

export default Nav;

