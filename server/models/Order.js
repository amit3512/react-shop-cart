const mongoose = require('mongoose');
const shortid =  require('shortid');

const Order = new mongoose.Schema({

  _id: { type: String, default:shortid.generate },
  email: { type: String, required: true },
  name: {type: String, required: true},
  address: { type: String, required: true },
  total: { type: Number, required: true },
  cartItems: [{
    _id:{type:String,default:shortid.generate },
    title:{type :String,required: true},
    price:{type :Number,required: true},
    count:{type :Number,required: true},
}],
},
{timestamps:true});

module.exports = mongoose.model('Order', Order);
