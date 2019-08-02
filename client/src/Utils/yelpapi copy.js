import axios from "axios";

// Set config defaults when creating the instance
// var instance = axios.create({
//   baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffeeshop&limit=10&location=',
//   headers: "Authorization: " + process.env.YELP_KEY
// });

// Alter defaults after instance has been created
//instance.defaults.headers.common['Authorization'] = process.env.YELP_KEY;

// const queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffeeshop&location=${query}`;
// const headers = {"Authorization":  process.env.YELP_KEY};   
 
//const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
//const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";
// const queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=`;
//     const header = {
//       'Authorization':  process.env.YELP_KEY,
//       'X-Requested-With': queryURL + "&limit=3"
//     };
// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get({queryURL: query, header});
//   }
// };

// const axios = require('axios');

async function makeRequest(query) {

    const config = {
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=' + query,
        headers: { 
          'Authorization':  process.env.YELP_KEY,
          'X-Requested-With': queryURL + "&limit=3"}
    }

    let res = await axios(config)

    console.log(res.request._header);
}
export default {
  makeRequest();
   };
