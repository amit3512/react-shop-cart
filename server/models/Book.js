const mongoose = require('mongoose');
const shortid =  require('shortid');

const Book = new mongoose.Schema({

  _id: { type: String, default:shortid.generate },
  category: { type: String, required: true },
  faculty: { type: String, required: true },
  semester: { type: String, required: true },
  image: { type: String, required: true },
  title: {type: String, required: true},
  condition: { type: String, required: true },
  original_price: { type: Number, required: true },
  price: {type:Number,required: true},
});

module.exports = mongoose.model('Book', Book);
