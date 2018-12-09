import React from "react";
import { ItemsList } from "./ItemsList";
import renderer from "react-test-renderer";

jest.mock("../../actions/items", () => dispatch =>
  dispatch({ type: "get_items", payload: [] })
);

it("renders without crashing", () => {
  const getItemsMock = jest.fn(() => {});
  const wrapper = renderer
    .create(<ItemsList getItems={getItemsMock} />)
    .toJSON();
  expect(wrapper).toMatchSnapshot();
});
