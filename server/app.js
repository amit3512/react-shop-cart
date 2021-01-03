const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// DB Config
const db = require('./configs/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));




app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



// Routes
app.use('/api/products', require('./router/product'));
app.use('/api/orders', require('./router/order'));
app.use('/api/bachelors', require('./router/book'));
app.use('/api/schools', require('./router/book'));
app.use('/api/intermediates', require('./router/book'));






module.exports = app;
