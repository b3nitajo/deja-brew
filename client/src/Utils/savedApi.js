import axios from "axios";

export default {
  // Save recipe
  savedRecipe: function() {
    return axios.post("/api/saved");
  }
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/saved" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/saved" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/saved", bookData);
  // }
};
