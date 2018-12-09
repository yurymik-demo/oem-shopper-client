import React from "react";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";

const ItemDetailCard = ({ item }) => {
  if (!item) return <ProgressIndicator />;
  console.log(item);

  const { title } = item;

  return <h2>Item Detail for item {title}</h2>;
};

export default ItemDetailCard;
