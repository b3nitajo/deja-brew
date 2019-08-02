import axios from "axios";
const limit = '&limit=10';
// Set config defaults when creating the instance
var instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffeeshop&limit=10&location=',
  headers: "Authorization: " + process.env.YELP_KEY
});

// Alter defaults after instance has been created
//instance.defaults.headers.common['Authorization'] = process.env.YELP_KEY;

// const queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffeeshop&location=";
// const header = "Authorization: " + process.env.YELP_KEY;   
 
//const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
//const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return instance.get({query});
  }
};
