const mongoose = require('mongoose');
const shortid =  require('shortid');

const Product = new mongoose.Schema({

  _id: { type: String, default:shortid.generate },
  image: { type: String, required: true },
  title: {type: String, required: true},
  description: { type: String, required: true },
  availableSizes: { type: [String], required: true },
  price: {type:Number},
});

module.exports = mongoose.model('Product', Product);
