import React from "react";
import ReactDOM from "react-dom";
import ScrollToTopOnMount from "./ScrollToTopOnMount";

it("renders without crashing", () => {
  const div = document.createElement("div");
  global.scrollTo = jest.fn(() => {});
  ReactDOM.render(<ScrollToTopOnMount />, div);
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});
