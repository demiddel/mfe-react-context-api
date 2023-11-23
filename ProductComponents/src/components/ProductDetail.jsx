import React from 'react';
import {
    Link,
    useLoaderData,
    useLocation,
    useNavigate,
} from 'react-router-dom';

const ProductDetail = () => {
    const loaderProduct = useLoaderData();
    const { state } = useLocation();
    console.log('state: ', state);
    console.log('ProductDetail: product: ', loaderProduct);

    const navigate = useNavigate();

    if (!Boolean(loaderProduct)) {
        return (
            <>
                <div>No Product Data Available</div>
                {/* <Link to="/">
                    <button>Go To Overview</button>
                </Link> */}
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
                <li>Product: {loaderProduct.name}</li>
                <li>Id: {loaderProduct.id}</li>
                <li>Price: {loaderProduct.price}</li>
                <li>Department: {loaderProduct.department}</li>
            </ul>
        </>
    );
};

export { ProductDetail };
