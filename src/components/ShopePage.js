import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";
import ItemList from "./ItemList";
import Cart from "./Cart";
import "../App.css";
import BasketList from "./BasketList";
import Alert from "./Alert";

const ShopePage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const [isAlert, setIsAlert] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then(res => res.json())
      .then(res => setItems(res.shop))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const addToBasket = item => {
    const itemIndex = orders.findIndex(
      orderItem => orderItem.mainId === item.mainId
    );

    let newItem = {};
    if (itemIndex < 0) {
      newItem = {
        ...item,
        quantity: 1,
      };
      setOrders([...orders, newItem]);
    } else {
      const newOrder = orders.map((order, index) => {
        if (itemIndex === index) {
          newItem = {
            ...order,
            quantity: order.quantity + 1,
          };
          return newItem;
        } else {
          return order;
        }
      });
      setOrders([...newOrder]);
    }
    setIsAlert(newItem.displayName);
  };

  const closeAlert = () => {
    setIsAlert("");
  };
  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  const handleDelete = id => {
    const newOrderBasket = orders.filter(item => item.mainId !== id);
    setOrders(newOrderBasket);
  };

  const changeQuantity = (id, direction) => {
    const newOrder = orders
      .map(order => {
        if (direction === "inc" && order.mainId === id) {
          return { ...order, quantity: order.quantity + 1 };
        } else if (direction === "dec" && order.mainId === id) {
          return { ...order, quantity: order.quantity - 1 };
        }
        return order;
      })
      .filter(order => order.quantity > 0);

    setOrders(newOrder);
  };

  return (
    <main className="content container">
      <Cart
        quantity={orders.length}
        handleBasketShow={handleBasketShow}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <ItemList
          items={items}
          getOrder={addToBasket}
        />
      )}
      {isBasketShow && (
        <BasketList
          orders={orders}
          handleBasketShow={handleBasketShow}
          handleDelete={handleDelete}
          changeQuantity={changeQuantity}
        />
      )}
      {isAlert && (
        <Alert
          name={isAlert}
          closeAlert={closeAlert}
        />
      )}
    </main>
  );
};

export default ShopePage;
