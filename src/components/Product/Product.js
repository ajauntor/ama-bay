import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    return (
        <div className="product">

            <div className="img">
                <img src={props.product.img} alt="" />
            </div>

            <div className="product-name">
                <h3>{props.product.name}</h3>
                <br />
                <p><small>by : {props.product.seller}</small></p>
                <h3>${props.product.price}</h3>
                <br />
                <p><small>only {props.product.stock} items left</small></p>
                <button 
                className="cart-button"
                onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>

        </div>
    );
};

export default Product;