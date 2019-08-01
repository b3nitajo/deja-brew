import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/index';
import Welcome from "./pages/Welcome";
import Yelp from "./components/YelpSearch/Search"
import Dashboard from "./components/Dashboard/Dashboard"

import { Provider } from 'react-redux';
import store from './store'; 
import { loadUser } from './actions/authActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/yelp" component={Yelp} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
}



export default App;
