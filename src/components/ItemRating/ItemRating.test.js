import React from "react";
import ReactDOM from "react-dom";
import ItemRating from "./ItemRating";

jest.mock("../../routes/home/home", () => {
  return () => "home_route_component";
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ItemRating />, div);
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});

it("renders 2 out of 5 stars solid crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ItemRating rating="2" />, div);
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});

it("renders 2 out of 10 stars solid crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ItemRating rating="2" length="10" />, div);
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});
