import React, { Fragment, useRef, useEffect, useContext } from "react";
// import { render } from "product_components/ProductComponents";
import { ProductComponent } from "product_components/ProductComponent";
// import { useHistory } from "react-router-dom";
import { CartContext } from 'context_providers/CartContext';

const ProductListComponent = ({ data }) => {
  const { addCartItem } = useContext(CartContext);

  // TODO: This code is necessary to make routing work inside the Page wrapper
  // currently to make the context work, this was removed. 

  // const ref = useRef(null);
  // const history = useHistory();

  // useEffect(() => {
  //   const { onParentNavigate } = render(ref.current, {
  //     initialPath: history.location.pathname,
  //     onNavigate: ({ pathname: nextPathname }) => {
  //       const { pathname } = history.location;

  //       if (pathname !== nextPathname) {
  //         history.push(nextPathname);
  //       }
  //     },
  //     initialData: data,
  //   });

  //   if (onParentNavigate) {
  //     history.listen(onParentNavigate);
  //   }
  // }, []);

  return (
    data &&
    data.map((p) => {
        return (
            <Fragment key={p.id}>
                <ProductComponent product={p} />
                <button onClick={() => addCartItem(p)}>Add Product</button>
            </Fragment>
        );
    })
);
};

export { ProductListComponent };
