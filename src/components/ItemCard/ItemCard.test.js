import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ItemCard from "./ItemCard";

it("renders without crashing", () => {
  const mockItem = {
    title: "title",
    description: "item descriotion",
    price: "$123.00"
  };
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ItemCard item={mockItem} />
    </BrowserRouter>,
    div
  );
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});
