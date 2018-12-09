import { GET_ITEM_DETAILS } from "../actions/types.const";

export default (state = null, action) => {
  switch (action.type) {
    case GET_ITEM_DETAILS:
      return action.item;
    default:
      return state;
  }
};
