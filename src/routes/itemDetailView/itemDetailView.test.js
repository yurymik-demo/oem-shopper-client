import React from "react";
import renderer from "react-test-renderer";
import { ItemDetailView } from "./itemDetailView";

jest.mock("../../components/ItemsList/ItemsList", () => "ItemsListComponent");
jest.mock(
  "../../components/ItemDetailCard/ItemDetailCard",
  () => "ItemDetailCard"
);

it("renders without crashing", () => {
  const getItemDetailsMock = jest.fn(() => {});
  const wrapper = renderer
    .create(<ItemDetailView getItemDetails={getItemDetailsMock} />)
    .toJSON();
  expect(wrapper).toMatchSnapshot();
  expect(getItemDetailsMock).toHaveBeenCalled();
});
