import React from "react";
import { Navbar, NavItem, Button} from "react-materialize";
import "components/Searchbar1/loggedNav.css";


function Searchbar1(props) {
  return (
    <React.Fragment>
      <Navbar alignLinks="right" >
        <NavItem>
          <input
            id="icon_prefix"
            type="text"
            className="validate"
            alignLinks="left"
            onChange={props.handleInputChange}
          />
        </NavItem>
        <NavItem>
          <Button
            type="submit"
            waves="light"
            onClick={props.handleSearchSubmit}
          >
            Submit
          </Button>
        </NavItem>
      </Navbar>
    </React.Fragment>
  );
}

export default Searchbar1;
