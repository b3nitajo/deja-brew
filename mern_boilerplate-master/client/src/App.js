import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome'

// import Navbar from './components/Navbar/index';
// import Card from './components/card';
// import DiffCard from './components/difficultyCard/index';
// import Button from './components/TimerButton/index';
// import SearchBar from './components/Searchbar/searchbar.js'




function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path='/' component={Welcome} />
      </React.Fragment>
    </Router>

  );
}

export default App;
