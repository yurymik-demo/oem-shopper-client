import React from "react";

const ItemCard = props => {
  const { title, description, price } = props.item;

  return (
    <div className="row item-card">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>{description}</p>
          </div>
          <div className="card-action">
            <a href="#">Ratings</a>
            <div className="right white-text">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
