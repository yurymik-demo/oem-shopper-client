import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./ItemRating.scss";

const ItemRating = ({ rating, length = 5, className }) => {
  if (!rating) return null;
  const filledStars = rating;
  const emptyStars = length - rating;

  const renderStars = (count, isFilled) => {
    const iconName = isFilled ? "star" : "star_border";
    const stars = [];
    while (count > 0) {
      stars.push(count);
      count--;
    }
    return stars.map(key => (
      <Link key={key} to="#" className="rating-star-link">
        <i className="material-icons tiny">{iconName}</i>
      </Link>
    ));
  };

  return (
    <div className={classnames("item-rating-container", className)}>
      {renderStars(filledStars, true)}
      {renderStars(emptyStars, false)}
    </div>
  );
};

export default ItemRating;
