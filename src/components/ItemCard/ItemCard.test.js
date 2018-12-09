import React from "react";
import ReactDOM from "react-dom";
import ItemCard from "./ItemCard";

it("renders without crashing", () => {
  const mockItem = {
    title: "title",
    description: "item descriotion",
    price: "$123.00"
  };
  const div = document.createElement("div");
  ReactDOM.render(<ItemCard item={mockItem} />, div);
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});
