const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const shortid = require('shortid');

const app= express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://Badal:ambadcr7@learn.fxagg.mongodb.net/shop_cart?retryWrites=true&w=majority",
    { useNewUrlParser: true ,useCreateIndex: true, useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  const Product = mongoose.model("products",new mongoose.Schema({
      _id:{type: String, default: shortid.generate},
      title: {type:String},
      description: {type:String},
      image: {type:String},
      price: {type:Number},
      availableSizes: {type:[String]},

  })
  );
  
app.get("api/products",async (req,res) => {
        const products = await Product.find({});
        res.send(products);
  });

app.post("api/products",async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

app.delete("api/products/:id", async(req,res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server at http://localhost:5000"));