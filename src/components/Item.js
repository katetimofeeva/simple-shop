import React from "react";
import "../App";

const Item = ({ item, getOrder }) => {
  const { displayDescription, displayName, price, displayAssets } = item;

  const handleClick = id => {
    getOrder(id);
  };
  return (
    <div className="card col s12 m4 l3 z-depth-5  indigo lighten-4">
      <div className="card-image">
        <img
          className="responsive-img"
          src={displayAssets[0].url}
          alt={displayName}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => handleClick(item)}
        >
          Buy it!
        </button>
        <span className="right bold">{price.regularPrice}</span>
      </div>
    </div>
  );
};

export default Item;
