import React, { Fragment, useContext, memo, useEffect } from 'react';
import { useLocation, useLoaderData } from 'react-router-dom';

import { render } from 'product_components/ProductComponents';
import { ProductComponent } from 'product_components/ProductComponent';
import { CartContext } from 'context_providers/CartContext';

const ProductListComp = () => {
    const loadedProducts = useLoaderData();
    const { addCartItem } = useContext(CartContext);
    const { pathname } = useLocation();

    // useEffect(() => {
    //     const productContainer = document.getElementById('products-container');
    //     render(productContainer, {
    //         pathname,
    //         initialData: loadedProducts,
    //     });
    // }, []);

    return (
        loadedProducts &&
        loadedProducts.map((p) => {
            return (
                <Fragment key={p.id}>
                    <ProductComponent product={p} />
                    <button onClick={() => addCartItem(p)}>Add Product</button>
                </Fragment>
            );
        })
    );
};

const ProductListComponent = memo(ProductListComp);

export { ProductListComponent };
