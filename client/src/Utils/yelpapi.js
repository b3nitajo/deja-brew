import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
//const axios = require('axios');
// Set config defaults when creating the instance
// var instance = axios.get({
//   baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffeeshop&limit=10&location=',
//   headers: {
//     'Authorization': process.env.YELP_KEY,
//     'X-Requested-With': 'https://api.yelp.com/v3/businesses/search?term=coffeeshop&limit=10&location='
//   }
// });

// Alter defaults after instance has been created
//instance.defaults.headers.common['Authorization'] = process.env.YELP_KEY;

// const queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffeeshop&location=${query}`;
// const headers = {"Authorization":  process.env.YELP_KEY};   
 
// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";
// const queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=`;
//     const header = {
//       'Authorization':  process.env.YELP_KEY,
//       'X-Requested-With': queryURL
//     };
// // Export an object with a "search" method that searches the Giphy API for the passed query
const APIKEY = process.env.YELP_KEY;
const BASE = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffeeshop&location=';
const Auth = 'Authorization: Bearer YJEO2r4XR6bEMe3EtY7vocZwiK7bSo-k5Ai5E0ntorU0D0e3ux0xyq83F7iSg-7bbhTV6HsfGDxWN8O-5ep4TFIVJkYHC7sBtVPXr9LccXwlchupZXXT9yT7DvSrXHYx';
const vre = 'X-Requested-With: https://api.yelp.com/v3/businesses/search?term=coffeeshop&location=';
const headers = {
  Authorization: 'Bearer YJEO2r4XR6bEMe3EtY7vocZwiK7bSo-k5Ai5E0ntorU0D0e3ux0xyq83F7iSg-7bbhTV6HsfGDxWN8O-5ep4TFIVJkYHC7sBtVPXr9LccXwlchupZXXT9yT7DvSrXHYx',
  'X-Requested-With': 'https://api.yelp.com/v3/businesses/search?term=coffeeshop&location='
}

export default {
  search: function(query) {
    return axios.get(BASE + query, {headers});
  }
};






