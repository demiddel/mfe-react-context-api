import React, {
    Fragment,
    useRef,
    useLoaderData,
    useContext,
    memo,
} from 'react';
// import { render } from 'product_components/ProductComponents';
import { ProductComponent } from 'product_components/ProductComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from 'context_providers/CartContext';

const ProductListComp = ({ data }) => {
    const loadedProducts = useLoaderData();
    const { addCartItem } = useContext(CartContext);

    // TODO: This code is necessary to make routing work inside the Page wrapper
    // currently to make the context work, this was removed.

    const ref = useRef(null);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // useEffect(() => {
    //     const { onParentNavigate } = render(ref.current, {
    //         initialPath: pathname,
    //         onNavigate: ({ pathname: nextPathname }) => {
    //             if (pathname !== nextPathname) {
    //                 navigate(nextPathname); // Check if replace:true is needed here
    //             }
    //         },
    //         initialData: data,
    //     });

    //     if (onParentNavigate) {
    //         window.history.listen(onParentNavigate);
    //     }
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
