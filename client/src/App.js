import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarApp from './components/NavbarApp/index';
// import Card from './components/card';
// import DiffCard from './components/difficultyCard/index';
// import Button from './components/TimerButton/index'
import Welcome from "./pages/Welcome";
import Yelp from "./components/YelpSearch/Search"

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
        <NavbarApp />
        <Switch>
          <Route exact path="/" component={Welcome} />
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
