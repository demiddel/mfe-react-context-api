import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = ({ history, location: { state } }) => {
    if (!state) {
        return (
            <>
                <div>No Product Data Available</div>
                <Link to="/">
                    <button>Go To Overview</button>
                </Link>
            </>
        );
    }
    const { product } = state;

    return (
        <>
            <button onClick={() => history.goBack()}>Go Back</button>
            <ul>
                <li>Product: {product.name}</li>
                <li>Price: {product.price}</li>
                <li>Color: {product.color}</li>
            </ul>
        </>
    );
};

export { ProductDetail };
