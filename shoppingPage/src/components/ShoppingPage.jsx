import React from "react";
import { render as renderProductComponent } from "product_components/ProductComponent";
import { Cart } from "./Cart";

const ShoppingPage = () => {
  const initialData = [];

  return (
    <>
      <main>{renderProductComponent(ref.current, { initialData })}</main>
      <aside>
        <Cart />
      </aside>
    </>
  );
};

export { ShoppingPage };
