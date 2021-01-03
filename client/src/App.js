import React from 'react';
import Bachelors from './components/Bachelor/Bachelors';
import Schools from './components/School/Schools';
import Intermediates from './components/Intermediate/Intermediates';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart';
import Orders from './components/Orders';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dropdown from './components/Dropdown';

import {fetchData} from './api/index.js';
import {fetchBachelorProducts} from './actions/bookActions';
import {fetchBachelorBooks} from './actions/bookActions';
import {fetchBachelorBook} from './actions/bookActions';
import {addToCart} from './actions/cartActions';
import Socket  from './api/Socket.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      faculty: '',
    };
   
  }

  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyinCart = false;
  //   cartItems.forEach((item) => {
  //     if (item._id === product._id) {
        
  //       item.count++;
  //       alreadyinCart = true;
  //     }
  //   });
  //   if (!alreadyinCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({cartItems});
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({cartItems:cartItems.filter((x) => x._id !== product._id)});
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)));
    
  // };

//   sortProducts = (event) => {
//     const sort = event.target.value;
//     console.log(event.target.value);
//     this.setState((state)=>({
//        sort:sort,
//        products:this.state.products.slice().sort((a,b)=>
//        sort === "Lowest" 
//        ? a.price > b.price 
//        ? 1
//        :-1
//        :sort === "Highest"
//        ?a.price < b.price
//        ?1
//        :-1
//        :a._id > b._id
//        ?1:
//        -1
//        ),
//     }));
//   };
       
       
  


// filterProducts=(event)=>{
//   if (event.target.value === ""){
//     this.setState({size:event.target.value, products:data.products });
       
        
     
//     }else{
//     this.setState({
//         size:event.target.value,
//         products:data.products.filter(product=>product.availableSizes.indexOf(event.target.value)>=0),
//       });

//   }
      
// };

// createOrder=(order)=>{
//   alert("Need to save order for " + order.name);
// };



  
render() {
  const { data, faculty } = this.state;
  return (
    
    <Provider store={store}>
            <div className="grid-container">
                  <header className="">
                  <Navbar/>
                  
                    
                  </header>
                  <main>
                      <div className="content">
                          <div className="main">
                          <Route path='/schools' component={Dropdown}/> 
                          <Route path='/bachelors' component={Bachelors}/> 
                          <Route path='/+2' component={Intermediates}/>
                         
                          
                          <Route path='/bachelor/:faculty' component={Bachelors}/>
                          <Socket />
                          </div>

                          <div className="sidebar">
                          <Cart />
                          
                          </div>
                          
                      </div>
                  </main>
                  <footer>
                      All right's Reserved.
                  </footer>
            </div>
            </Provider>
          
    
    
  );
 }
}

export default App;