import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("../../routes/home/home", () => {
  return () => "home_route_component";
});

jest.mock("../Header/Header", () => {
  return () => "<Header />";
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});
