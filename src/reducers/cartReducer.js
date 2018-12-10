import {
  GET_USER_CART,
  CART_ADD_ITEM,
  GET_CART_TOTAL_COUNT,
  UPDATE_CART_TOTALS
} from "../actions/types.const";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER_CART:
      return { ...state, ...action.data };
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: action.cartItems,
        totals: action.totals
      };
    case GET_CART_TOTAL_COUNT:
    case UPDATE_CART_TOTALS:
      return {
        ...state,
        totals: action.totals
      };
    default:
      return state;
  }
};
