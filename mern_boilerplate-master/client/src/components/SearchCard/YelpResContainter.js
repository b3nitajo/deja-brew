import React, { Component } from "react";
import YelpSearchForm from "./YelpSearchForm";
import YelpResList from "./YelpResList";
import API from "../../utils/API";

class YelpResContainter extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Yelp API
  componentDidMount() {
    this.searchLocation("14408 St Andrews Drive Grandview MO 64030");
  }

  searchLocation = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Yelp API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchLocation(this.state.search);
  };

  render() {
    return (
      <div>
        <YelpSearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <YelpResList results={this.state.results} />
      </div>
    );
  }
}

export default YelpResContainter;
