 //dotenv.config();

 
// const buf = Buffer.from('Authorization=YELP_API')
// const config = dotenv.parse(buf)
//const axios = require("axios");

const dotenv = require("dotenv");
dotenv.config();
const axios = require("axios");
//  DB Config
//const YELP_Auth = process.env.YELP_KEY;
//require('dotenv').config();
//const AUTH_KEY = process.env.YELP_KEY;
//const AUTH_KEY = process.env.YELP_KEY;
const BASE = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&limit=3&location=';
const headers = {
  Authorization: process.env.YELP_KEY,
  //'Authorization': 'Bearer YJEO2r4XR6bEMe3EtY7vocZwiK7bSo-k5Ai5E0ntorU0D0e3ux0xyq83F7iSg-7bbhTV6HsfGDxWN8O-5ep4TFIVJkYHC7sBtVPXr9LccXwlchupZXXT9yT7DvSrXHYx',
  'X-Requested-With': 'https://api.yelp.com/v3/businesses/search?term=coffee&limit=3&location='
}

export default {
  search: function(query) {
    return axios.get(BASE + query, {headers});
  }
};






