import React, { useRef, useEffect } from "react";
import { render } from "product_components/ProductComps";
import { useHistory } from "react-router-dom";

const ProductComponents = ({data}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = render(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialData: data
    });

    if (onParentNavigate) {
      history.listen(onParentNavigate);
    }
  }, []);

  return <><div ref={ref}></div><div><button>Add Product to cart</button></div></>;
};

export { ProductComponents };
