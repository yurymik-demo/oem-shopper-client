import React from "react";
import HomeView from "./home";
import renderer from "react-test-renderer";

jest.mock("../../components/ItemsList/ItemsList", () => "ItemsListComponent");

it("renders without crashing", () => {
  const wrapper = renderer.create(<HomeView />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
