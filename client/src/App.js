import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/index';
// import Card from './components/card';
// import DiffCard from './components/difficultyCard/index';
// import Button from './components/TimerButton/index'
import Welcome from "./pages/Welcome";

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
          <Route exact path="/" component={Welcome} />
          <Route exact path="/Welcome" component={Welcome} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
}



export default App;
