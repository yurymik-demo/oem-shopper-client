import React from "react";
import ReactDOM from "react-dom";
import ProgressIndicator from "./ProgressIndicator";

jest.mock("../../routes/home/home", () => {
  return () => "home_route_component";
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProgressIndicator />, div);
  expect(div).toMatchSnapshot();
  ReactDOM.unmountComponentAtNode(div);
});
