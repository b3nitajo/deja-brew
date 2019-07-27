import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
//import dotenv from "dotenv";
const queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=gas&location=" + fullAddress + "&limit=3";
const header = "Authorization: " + process.env.YELP_KEY;   
//const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
//const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get({
        url: queryURL,
        headers: header
    });
  }
};
