import React from "react";
import "../App.css";

const Cart = ({ quantity = 0, handleBasketShow }) => {
  return (
    <div
      className="cart deep-purple darken-4"
      onClick={handleBasketShow}
    >
      <i className="material-icons"> shopping_cart</i>
      {quantity ? (
        <div className=" cart-quantity">
          <span>{quantity}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
