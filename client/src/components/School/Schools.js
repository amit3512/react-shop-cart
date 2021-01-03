// feature1
import React, {Component} from 'react';
import Filter from '../../components/Filter';
import formatCurrency from "../../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { connect } from 'react-redux';
import {fetchSchoolProducts} from '../../actions/bookActions';
import {addToCart} from '../../actions/cartActions';

class Schools extends Component {
  constructor(props){
    super(props);
      this.state={
             product:null
      };
    
  }

  componentDidMount(){
    this.props.fetchSchoolProducts();
  }

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
  return (
    <div className="">
    <Fade bottom cascade>
            {!this.props.products ? (
             
            <div>Loading... </div>
          ) : (
            <div>
              <Filter/>
          

            <ul className="products">
              {this.props.products.map((product) => (
                
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
                      <div>{formatCurrency(product.price)}</div>
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
                  <p>{product.faculty}</p>
                  <p>{product.condition}</p>
                  <p>
                    Original Price:{" "}
                    {formatCurrency(product.original_price)}
                  </p>
                  <div className="product-price">
                    <div>Price:{formatCurrency(product.price)}</div>
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

export default connect((state)=>({products:state.products.items}),{fetchSchoolProducts,addToCart})(Schools);
 