import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { state: product } = useLocation()
    const navigate = useNavigate();

    if (!Boolean(product)) {
        return (
            <>
                <div>No Product Data Available</div>
                <Link to="/">
                    <button>Go To Overview</button>
                </Link>
            </>
        );
    }
    function navigateBack() {
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
        }
    }

    return (
        <>
            <button onClick={navigateBack}>Go Back</button>
            <ul>
                <li>Product: {product.name}</li>
                <li>Price: {product.price}</li>
                <li>Department: {product.department}</li>
            </ul>
        </>
    );
};

export { ProductDetail };
