import React from 'react';

const Product = (props) => {
    console.log(props.product.price);
    return (
        <div>
            <h2>This is Product Components</h2>
        </div>
    );
};

export default Product;