// feature1
import React, {Component} from 'react';
import Book from '../../components/Book/Book';
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
             states : [],
			       cities : [],
             selectedCountry : '--Choose Country--',
             selectedState : '--Choose State--',
             selectedSem : '--Choose Sem--',
             countries : [
              { name: 'Management', 
                    states: [ 
                                {
                                name: 'School', cities: ['I', 'II', 'III','IV','V','VI','VII','VIII']
                                },
                              {
                                name: 'Civil', cities: ['I','II', 'III','IV','V','VI','VII','VIII']
                              }
                            ] 
             }
            ],
            
              
             

             
              
              
            
            
            
      }
      
      // this.changeCountry = this.changeCountry.bind(this);
      // this.changeState = this.changeState.bind(this);
      // this.getBook = this.getBook.bind(this);
    
  }

  //  async componentDidMount(){
  //   const fetchedData = await this.props.fetchBachelorProducts();
  //   console.log(fetchedData);
  //   this.setState({ products:fetchedData});
    
  // }

  //   async changeCountry(event) {
	// 	this.setState({selectedCountry: event.target.value});
  //   this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
    
	// }

	// async changeState(event) {
	// 	this.setState({selectedState: event.target.value});
	// 	const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
  //   this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
  //   const fetchedData = await fetchBachelorBooks(event.target.value);
  //   this.setState({products: fetchedData});
  // }
  
  // async getBook(event) {
	// 	this.setState({selectedSem: event.target.value});
    
  //   const fetchedData = await fetchBachelorBook(this.state.selectedState,event.target.value);
  //   this.setState({products: fetchedData});
	// }

  // openModal = (product) => {
  //   this.setState({ product });
  // };

  // closeModal = () => {
  //   this.setState({ product: null });
  // };

  render() {
    const {  faculty, product, country, countries } = this.state;
  return (
    <div className="">
    <Book/>
    </div>
  );
 }
}

export default connect((state)=>({products:state.products.items}),{fetchBachelorProducts,fetchBachelorBooks,fetchBachelorBook,addToCart})(Bachelors);
 