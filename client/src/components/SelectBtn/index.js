import React from "react";
import { Navbar, NavItem, Button} from "react-materialize";


// ...props dynamically spreads passed props onto element
// instead of defining separately
function SelectBtn(props) {
  return (
  <Button className="save-btn"  waves="light" {...props} tabIndex="0">
   Save
   </Button>
  );
}

export default SelectBtn;
