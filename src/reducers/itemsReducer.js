import { GET_ITEMS } from "../actions/types.const";

export default (state = [], action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.items;
    default:
      return state;
  }
};
