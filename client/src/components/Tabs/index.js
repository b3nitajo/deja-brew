import React from "react";
import { Tab, Tabs} from "react-materialize";
import Welcom from "../../pages/Welcome"
import Searchbox from "../Searchbar2"
import "./style.css"
function Tabss () {
    return (
<Tabs className="tab-demo z-depth-1">
<Tab title="History">
History
</Tab>
<Tab title="Search" active>
<Searchbox />
</Tab>
<Tab title="Recipes">
<Welcom />
</Tab>
<Tab title="Find Local Coffee">
Test 4
</Tab>
</Tabs>)
}

export default Tabss;