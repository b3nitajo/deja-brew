import React, { Component } from "react";
import Search from "../components/YelpSearch/Search";
import { List, ListItem } from "../components/YelpSearch/Results";
import yelpapi from "../Utils/yelpapi";
import { Container} from "react-materialize";
//import SelectBtn from "../components/SelectBtn";


class Yelp extends Component {
  state = {
    coffeeShops: {},
    search: "",
    name: "",
    rating: "",
    address: "",
    city: "",
    state: ""
  };

  componentDidMount() {
    this.searchYelp("64030");
  };

  searchYelp = query => {
    yelpapi.search(query)
      .then(res =>{
        const results = res.data;
        console.log(results);
        this.setState({coffeeShops: results})
      })
      .catch(err => console.log(err))
     }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchYelp(this.state.search);
  };

//   saveBook = (id) => {
//     GOOGLEAPI.save(id)
//        .then(res =>{
//          async function bookData (){
//          const results = await res.data;
//          const savedTA = {
//            title: results.volumeInfo.title,
//            author: results.volumeInfo.authors.join(', '),
//            description: results.volumeInfo.description,
//            image: results.volumeInfo.imageLinks.thumbnail,
//            link: results.volumeInfo.previewLink
//          }
//          console.log(res);
//          console.log(results);
//          console.log(savedTA);
//          API.saveBook(savedTA);
//          }
//          bookData();
//        })
//        .catch(err => console.log(err));
//   };
  
  render() {
    return (
      <Container>
        <h1>Search for Coffee Shop</h1>
        <div>
            <Search
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
        </div>
        <div>
            <h1>Search Results</h1>
            {this.state.coffeeShops.length ? (
              <List>
              {this.state.coffeeShops.map(res => (
                  <ListItem key={res.id}>
                    <strong>
                      {res.businesses.name} 
                      <br></br>
                    </strong>
                      rating: {res.businesses.rating} 
                      <br></br>
                    <strong>
                      Location: <nbsp></nbsp>
                    </strong>  
                      {res.businesses.location.address1}
                      <br></br>
                      {res.businesses.location.city}, {res.businesses.location.state}
                      <br></br>
                      <br></br>
                    <img src={res.businesses.image_url} alt="shop"></img>
                    <br></br>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
    </Container>
    );
  }
}

export default Yelp;