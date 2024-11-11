import React from "react";
import BasketItem from "./BasketItem";

const BasketList = ({
  orders,
  handleBasketShow,
  handleDelete,
  changeQuantity,
}) => {
  const totalCount = orders.reduce((acc, current) => {
    acc = acc + current.quantity * current.price.regularPrice;

    return acc;
  }, 0);

  return (
    <div className="basket-wrapper">
      <ul className="collection basket-list active ">
        <li className="collection-item active ">Basket</li>
        {orders.length ? (
          orders.map(order => {
            return (
              <>
                <BasketItem
                  key={order.mainId}
                  {...order}
                  handleDelete={handleDelete}
                  changeQuantity={changeQuantity}
                />
              </>
            );
          })
        ) : (
          <h3>The basket is empty</h3>
        )}
        <li className="collection-item active basket-total">
          Total cost : ${totalCount}{" "}
          <button className="btn deep-purple darken-4 ">Place Order</button>
        </li>

        <i
          className="material-icons basket-close"
          onClick={handleBasketShow}
        >
          close
        </i>
      </ul>
    </div>
  );
};

export default BasketList;
