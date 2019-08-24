// import React from 'react';
import React, { Component } from "react";
// import { Row, Container } from "react-materialize";
import Card from "../card";
import Axios from "axios";
import NavSearch from "../Searchbar1"



class SearchBar extends Component {
  state = {
    recipes: [],
    name: "",
    instructions: "",
    method: ""
  };

  // handleSaveRec = e => {
  //   // e.preventDefault();

  //   let saveRec = this.state.recipes.filter(recipe => recipe._id === e);
  //   saveRec = saveRec[0];
  //   console.log(saveRec);
  //   // API.saveBook(saveRec)
  //   //     .then(res => {console.log(res);
  //   //     alert("Your recipe has been added!")})
  //   //     .catch(err => console.log(err))
  // };



  handleSearchSubmit = method => {
    console.log("here");
    console.log(this.state.method);
    Axios.get(
      "http://localhost:3001/api/methods/search/" + (this.state.method || "")
    )
      .then(res => {
        console.log(res.data.method);
        this.setState({
          name: res.data.method,
          instructions: res.data.instructions
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ method: event.target.value });
  };

  render() {
    return (
      <>
      
       <NavSearch
            handleSearchSubmit={this.handleSearchSubmit}
            handleInputChange={this.handleInputChange}
          />

        {this.state.name.length ? (
          <Card
            method={this.state.method}
            instructions={this.state.instructions}
          />
        ) : null}

       
      </>
    );
  }
}

export default SearchBar;
