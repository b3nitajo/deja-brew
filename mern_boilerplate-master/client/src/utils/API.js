import axios from "axios";

// The get Coffee Shops From the server
// It accepts a "query" or term to search the YELP api for
export default {
  search: function(query) {
    return axios.get("/yelpapi/coffeeSearch", { params: { q: query } });
  }
};


