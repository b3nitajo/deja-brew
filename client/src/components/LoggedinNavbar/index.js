import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import 'components/LoggedinNavbar/loggedNav.css'



function LoggedNav() {
    return (
        <>
            <Navbar class="navbar" brand={<a />} alignLinks="right">
           
           
            <i class="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" class="validate" alignLinks='left' />
         
           
          
                <NavItem href="">
                    My Recipes
</NavItem>
                <NavItem href="">
                    Find a Coffeeshop
</NavItem>
                <NavItem>
                    Learn Coffee
</NavItem>
                <NavItem>
                    Log Out
</NavItem>
            </Navbar>
        </>
    )
}

export default LoggedNav
