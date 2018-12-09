import { GET_ITEMS, GET_ITEM_DETAILS } from "./types.const";

const _MOCK_ITEMS = [
  { id: "1", title: "item1", description: "description item2", price: "$15" },
  { id: "2", title: "item 2", description: "description item 2", price: "$25" },
  { id: "3", title: "item 3", description: "description item 3", price: "$35" }
];

export const getItems = () => dispatch => {
  dispatch({ type: GET_ITEMS, items: _MOCK_ITEMS });
};

export const getItemDetails = id => dispatch => {
  const item = _MOCK_ITEMS.find(item => item.id === id);
  setTimeout(() => dispatch({ type: GET_ITEM_DETAILS, item }), 3000);
};
