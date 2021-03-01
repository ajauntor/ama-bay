import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12;
    }

    const tax = (total/7).toFixed(2);
    const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);

    return (
        <div className= "order-summary">
            <h4 className="order-heading">Order Summary</h4>
            <p>Items Ordered : {cart.length} </p>
            <p><small>Shipping Cost : {shipping} </small></p>
            <p><small>VAT : {tax}</small></p>
            <p className="total-price">Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;