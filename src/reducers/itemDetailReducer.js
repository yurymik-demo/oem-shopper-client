import { GET_ITEM_DETAILS, CLEAR_SELECTED_ITEM } from "../actions/types.const";

export default (state = null, action) => {
  switch (action.type) {
    case GET_ITEM_DETAILS:
      return action.item;
    case CLEAR_SELECTED_ITEM:
      return null;
    default:
      return state;
  }
};
