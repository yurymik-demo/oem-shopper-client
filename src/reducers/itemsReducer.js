import { GET_ITEMS, GET_ITEM_DETAILS } from "../actions/types.const";

export default (state = [], action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.items;
    case GET_ITEM_DETAILS:
      return action.item;
    default:
      return state;
  }
};
