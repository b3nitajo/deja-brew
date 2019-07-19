const axios = require('axios');
const router = require('express').Router();

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=';
axios.defaults.headers.common['Authorization'] = 'Bearer YJEO2r4XR6bEMe3EtY7vocZwiK7bSo-k5Ai5E0ntorU0D0e3ux0xyq83F7iSg-7bbhTV6HsfGDxWN8O-5ep4TFIVJkYHC7sBtVPXr9LccXwlchupZXXT9yT7DvSrXHYx';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

router.get("/coffeeSearch", (req, res) => {
  axios.get({ search: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
