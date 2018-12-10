import React from "react";
import { Link } from "react-router-dom";
import ItemRating from "../ItemRating/ItemRating";

import "./ItemCard.scss";

const ItemCard = props => {
  const { id, title, description, price, rating = 3 } = props.item;

  return (
    <div className="row item-card">
      <div className="col s12 m12">
        <div className="card white ">
          <div className="card-content ">
            <span className="card-title">{title}</span>
            <div className="right">${price}</div>
            <p>{description}</p>
          </div>
          <div className="card-action">
            <ItemRating className="left" rating={rating} />
            <Link
              className="right link view-details-action"
              to={`/items/${id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
