const router = require('express').Router();
const authController = require('../../controllers/auth');


// Matches with '/api/auth/login'
router.route('/login')
  .post(authController.login);

module.exports = router;




axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=';
axios.defaults.headers.common['Authorization'] = process.env.YELP_KEY;
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
//'X-Requested-With': 'XMLHttpRequest'
//const BASEURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=";
//const limitReturn = "&limit=3";
// Export an object with a "search" method that searches the Giphy API for the passed query


export default { 
  search: function(query) {
  return axios.get(query);
  }
};
