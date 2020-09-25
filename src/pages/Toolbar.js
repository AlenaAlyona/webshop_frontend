import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../store/shoppingCart/selectors";
// import { Link } from "react-router-dom";

export default function ToolBar() {
  const cart = useSelector(selectCart);
  // console.log("TOOLBAR STATE", cart);

  return (
    <div>
      <h1>Welcome to our fancy webshop!</h1>
      <p>Shopping cart {cart.length}</p>
    </div>
  );
}
