import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "./cart";

jest.mock("../../components/ItemsList/ItemsList", () => "ItemsListComponent");

it("renders without crashing", () => {
  const getUserCartMock = jest.fn(() => {});
  global.scrollTo = jest.fn(() => {});
  const wrapper = renderer
    .create(
      <BrowserRouter>
        <Cart getUserCart={getUserCartMock} />
      </BrowserRouter>
    )
    .toJSON();
  expect(wrapper).toMatchSnapshot();
  expect(getUserCartMock).toHaveBeenCalled();
});
