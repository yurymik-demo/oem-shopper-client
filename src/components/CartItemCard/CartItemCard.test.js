import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CartItemCard } from "./CartItemCard";

it("renders without crashing", () => {
  const mockItem = {
    item: {
      title: "title",
      description: "item descriotion",
      price: "123.00",
      rating: 4
    },
    quantity: 3
  };
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <CartItemCard cartItem={mockItem} />
    </BrowserRouter>,
    div
  );
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});
