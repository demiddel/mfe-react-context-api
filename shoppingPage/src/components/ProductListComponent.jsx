import React, { Fragment, useRef, useContext, memo, useEffect } from 'react';
import { useLocation, useLoaderData } from 'react-router-dom';

import { render } from 'product_components/ProductComponents';
import { ProductComponent } from 'product_components/ProductComponent';
import { CartContext } from 'context_providers/CartContext';

const ProductListComp = () => {
    const loadedProducts = useLoaderData();
    const { addCartItem } = useContext(CartContext);

    // TODO: This code is necessary to make routing work inside the Page wrapper
    const refContainer = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        render(refContainer.current, {
            pathname,
            hydrationData: loadedProducts,
        });
    }, []);

    return (
        loadedProducts &&
        loadedProducts.map((p) => {
            return (
                <Fragment key={p.id} ref={refContainer}>
                    <ProductComponent product={p} />
                    <button onClick={() => addCartItem(p)}>Add Product</button>
                </Fragment>
            );
        })
    );
};

const ProductListComponent = memo(ProductListComp);

export { ProductListComponent };
