// import React from 'react';
import React, { Component } from "react";
import DiffCard from "../components/difficultyCard";
import HardCard from "../components/HardCard";
import MedCard from "../components/MedCard";
import { Row, Container } from "react-materialize";
import Axios from "axios";
import Card from "../components/card";
import API from "../Utils/savedApi";



const h1Styles = {
  textAlign: "center"
};

class Welcome extends Component {
  state = {
    recipes: [],
    name: "",
    instructions: "",
    method: "",
    savedMethod: []
    
  };

  // handleSaveRec = e => {
  //   // e.preventDefault();

  //   let saveRec = this.state.recipes.filter(recipe => recipe._id === e);
  //   saveRec = saveRec[0];
  //   let saved = saveRec.method
  //   this.setState({ savedMethod: saved});
  //   API.savedRecipe({
  //     method: this.state.savedMethod
  //   })
  //       .then(res => res.json())
  //       .catch(err => console.log(err))
  // };

  handleRecipeRender = difficulty => {
    Axios.get("http://localhost:3001/api/methods/methods/" + (difficulty || ""))
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

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
        <Container>
          <br />
          <h5 style={h1Styles}>How difficult do you want the recipes to be?</h5>
        </Container>
        <Row>
          <div onClick={() => this.handleRecipeRender("Easy")}>
            <DiffCard />
          </div>
          <div onClick={() => this.handleRecipeRender("Medium")}>
            <MedCard />
          </div>
          <div onClick={() => this.handleRecipeRender("Hard")}>
            <HardCard />
          </div>
        </Row>
        {this.state.recipes.map((recipe, i) => (
          <Card
            key={recipe._id}
            method={recipe.method}
            id={recipe._id}
            instructions={recipe.instructions}
            handleSaveRec={this.handleSaveRec}
          >
            {recipe.method}
          </Card>
        ))}
      </>
    );
  }
}

export default Welcome;
