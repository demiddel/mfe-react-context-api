import React from "react";
import {useCart} from "../hooks/useCart";

const Cart = () => {
  const { items } = useCart();

  return (
    <div>
        Cart:
        {items.map((item, i) => <li>{item}</li>)}
    </div>
  );
};

export { Cart };
