import React, { useRef, useEffect } from "react";
import { render } from "product_components/ProductComps";
import { useHistory } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const ProductComponents = ({ data }) => {
  const ref = useRef(null);
  const history = useHistory();
  const { setItems } = useCart();

  useEffect(() => {
    const { onParentNavigate } = render(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialData: data,
    });

    if (onParentNavigate) {
      history.listen(onParentNavigate);
    }
  }, []);

  return (
    <>
      <div ref={ref}></div>
      <div>
        <button onClick={() => setItems((props) => [...props, data])}>
          Add Product to cart
        </button>
      </div>
    </>
  );
};

export { ProductComponents };
