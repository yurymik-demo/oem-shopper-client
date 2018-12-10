import React from "react";
import CartTotals from "./CartTotals";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const getItemsMock = jest.fn(() => {});
  const wrapper = renderer
    .create(<CartTotals getItems={getItemsMock} />)
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
