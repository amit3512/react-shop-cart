const express = require('express');
const router = express.Router();




const Book = require('../models/Book');

//Bachelor

router.get('',async(req, res) => {
  const products = await Book.find({});
  res.send(products);
});

router.get('/:faculty/',async(req, res) => {
 
  const products = await Book.find({category:"Bachelor",faculty:req.params.faculty});
  res.send(products);
});

router.get('/:faculty/:sem',async(req, res) => {
 
  const products = await Book.find({category:"Bachelor",faculty:req.params.faculty,semester:req.params.sem});
  res.send(products);
});




router.post('/',async (req, res) => {
  const newProduct = new Book(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

router.delete('/:id',async (req, res) => {
  const deletedProduct = await Book.findByIdAndDelete(req.params.id);
 
  res.send(deletedProduct);
});

module.exports = router;