// feature1
import React, {Component} from 'react';
import Filter from '../Filter';

import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { connect } from 'react-redux';
import {fetchBachelorProducts} from '../../actions/bookActions';
import {fetchBachelorBooks} from '../../actions/bookActions';
import {fetchBachelorBook} from '../../actions/bookActions';
import {addToCart} from '../../actions/cartActions';
import { NativeSelect, FormControl } from '@material-ui/core';
import shadows from '@material-ui/core/styles/shadows';


class Bachelors extends Component {
  constructor(props){
    super(props);
      this.state={
             product:null,
             products:[],
             countries : [],
			       states : [],
			       cities : [],
             selectedCountry : '--Choose Country--',
             selectedState : '--Choose State--',
             selectedSem : '--Choose Sem--',
             countries : [
              
            ],
            
              
             

             
              
              
            
            
            
      }
      
      this.changeCountry = this.changeCountry.bind(this);
      this.changeState = this.changeState.bind(this);
      this.getBook = this.getBook.bind(this);
    
  }

   async componentDidMount(){
    const fetchedData = await this.props.fetchBachelorProducts();
    console.log(fetchedData);
    this.setState({ products:fetchedData});
    
  }

    async changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
    this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
    
	}

	async changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
    this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
    const fetchedData = await fetchBachelorBooks(event.target.value);
    this.setState({products: fetchedData});
  }
  
  async getBook(event) {
		this.setState({selectedSem: event.target.value});
    
    const fetchedData = await fetchBachelorBook(this.state.selectedState,event.target.value);
    this.setState({products: fetchedData});
	}

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const {  faculty, product, country, countries } = this.state;
  return (
    <div className="">
    <Fade bottom cascade>
            {!this.state.products ? (
             
            <div>Loading... 
            
            </div>
            
          ) : (
            <div>
              
              
              <div className="layout" id="container">
                        
                  
                        <div>
                          <label>Type{" "}</label>
                          <select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                            <option>--Choose Country--</option>
                            {this.state.countries.map((e, key) => {
                              return <option key={key}>{e.name}</option>;
                            })}
                          </select>
                        
                        </div>

                        <div>
                          <label>Faculty/Group{" "}</label>
                          <select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                          <option>--Choose State--</option>  
                            {this.state.states.map((e, key) => {
                              return <option key={key}>{e.name}</option>;
                            })}
                          </select>
                          {this.getBook}
				                 </div>

                         <div>
                            <label>Semester/Class{" "}</label>
                            <select placeholder="City" value={this.state.selectedSem} onChange={this.getBook}>
                              <option>--Choose Sem--</option>
                              {this.state.cities.map((e, key) => {
                                return <option key={key}>{e}</option>;
                              })}
                            </select>
                          </div>
              </div>
              
             
           
            <ul className="products">
              {this.state.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a
                      href={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      <img src={product.image} alt={product.title}></img>
                      <p>{product.title}</p>
                    </a>
                    <div className="product-price">
                      <div>{product.price}</div>
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className="button primary"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </div>
          )}
    </Fade>
      {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.condition}</p>
                  <p>{product.original_price}</p>
                  <p>
                    Price:{" "}
                    {product.price}
                  </p>
                  <div className="product-price">
                    <div>{(product.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}

    </div>
  );
 }
}

export default connect((state)=>({products:state.products.items}),{fetchBachelorProducts,fetchBachelorBooks,fetchBachelorBook,addToCart})(Bachelors);
 