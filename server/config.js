const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes');
const compression = require('compression');

const app = express();

// middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`));

// HTTP Requests go here
app.get('/search?:query', route.Search);

app.post('/addvendor', route.AddVendor);
// post a review
// // app.post('/reviews', route.postReview);
// // get reviews
// app.get('/userReviews', route.getReviews);
// // get Locations
// app.get('/location', route.getLocations);
// // get profile data
// app.get('/profile?:id', route.getProfile);

module.exports = app;
