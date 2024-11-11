import React from "react";
import Item from "./Item";
import "../App.css";

const GoodsList = ({ items = [], getOrder }) => {
  return (
    <div className="items">
      {!items.length ? (
        <h3> We do not have any products</h3>
      ) : (
        items.map(item => {
          return (
            <Item
              key={item.mainId}
              item={item}
              getOrder={getOrder}
            />
          );
        })
      )}
    </div>
  );
};

export default GoodsList;
