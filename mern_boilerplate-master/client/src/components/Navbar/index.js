import React from 'react';
import { Navbar, NavItem} from 'react-materialize';
import 'components/Navbar/Navbar.css'



function Nav() {
  return (
    <React.Fragment>
      <Navbar className="navbar"  alignLinks="right">
<NavItem href="/">
Login
</NavItem>
<NavItem href="/signup">
Sign Up
</NavItem>
<NavItem href="">

</NavItem>
</Navbar>
</React.Fragment>
  );
}

export default Nav;

