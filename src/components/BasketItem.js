import React from "react";

const BasketItem = ({
  displayName,
  price,
  mainId,
  quantity,
  handleDelete,
  changeQuantity,
}) => {
  
  return (
    <li className="collection-item basket-item">
      <p>{displayName}</p>
      <div className="basket-item center">
        <p
          className="quantity-direction"
          onClick={() => changeQuantity(mainId, "inc")}
        >
          <i className="material-icons basket-quantity"> expand_less</i>
        </p>
        <p>{quantity}</p>
        <p
          className="quantity-direction"
          onClick={() => changeQuantity(mainId, "dec")}
        >
          <i className="material-icons basket-quantity">expand_more</i>
        </p>
      </div>
      <p className="center "> ${price.regularPrice * quantity}</p>

      <span className="end">
        <i
          className="material-icons basket-delete"
          onClick={() => handleDelete(mainId)}
        >
          delete
        </i>
      </span>
    </li>
  );
};

export default BasketItem;
