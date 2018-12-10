import React from "react";
import HomeView from "./home";
import renderer from "react-test-renderer";

jest.mock("../../components/ItemsList/ItemsList", () => "ItemsListComponent");

it("renders without crashing", () => {
  global.scrollTo = jest.fn(() => {});
  const wrapper = renderer.create(<HomeView />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
