import "./CollectionItem.scss";
import React from "react";

export default function CollectionItem({ name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}
