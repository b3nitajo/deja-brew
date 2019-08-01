import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "react-materialize";

class SavedBooks extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    API.getBooks()
      .then(res =>
        this.setState(
          { books: res.data },
          console.log(res.data)
        )
      )
      .catch(err => console.log(err));
  }
  
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => {
        console.log(res.data);
        alert("Your book has been deleted!");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <p style={{ fontSize: 50 }}>Have a look at your favorite books.</p>
        </Jumbotron>
        <Container>
          <SavedBook books={this.state.books} deleteBook={this.deleteBook} />
        </Container>
      </div>
    );
  }
}
export default SavedBooks;
