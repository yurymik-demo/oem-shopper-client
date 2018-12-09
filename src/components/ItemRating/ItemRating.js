import React from "react";
import _ from "lodash";

const ItemRating = ({ rating, length = 5 }) => {
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
      <i key={key} className="material-icons">
        {iconName}
      </i>
    ));
  };

  return (
    <div>
      {renderStars(filledStars, true)}
      {renderStars(emptyStars, false)}
    </div>
  );
};

export default ItemRating;
