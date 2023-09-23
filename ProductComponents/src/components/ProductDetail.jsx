import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductDetail = ({ history }) => {
    const { state } = useLocation();

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
