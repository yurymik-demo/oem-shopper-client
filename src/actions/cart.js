import { reduce } from "lodash";
import {
  GET_USER_CART,
  CART_ADD_ITEM,
  UPDATE_CART_TOTALS
} from "./types.const";

// Mock cart data until connected to server API
const _MOCK_USER_CART = {
  // will have a nested 'item', id and a quanitity fields
  cartItems: [],
  totals: {
    itemsCount: 0
  }
};

const calculateCartTotals = cartItems => {
  const itemsCount = reduce(
    cartItems || [],
    (sum, cartItem) => sum + cartItem.quantity,
    0
  );

  return {
    itemsCount
  };
};

export const getUserCart = () => dispatch => {
  // adding timeout to simulate the api call and to demonstrate "waiting" experience
  setTimeout(() => {
    dispatch({ type: GET_USER_CART, data: _MOCK_USER_CART });
  }, 1000);
};

export const addToCart = (item, quantity = 1) => dispatch => {
  // MOCK storage for user cart items
  // when have real API this will be replaced with an axios call

  // check if item is already in the cart
  const existingItem = _MOCK_USER_CART.cartItems.find(
    cartItem => cartItem.id === item.id
  );

  // if new items, add it to cartItems collection, if existing, increase quantity
  if (!existingItem) {
    _MOCK_USER_CART.cartItems.push({ id: item.id, item, quantity });
  } else {
    existingItem.quantity += quantity;
  }

  _MOCK_USER_CART.totals = calculateCartTotals(_MOCK_USER_CART.cartItems);

  dispatch({
    type: CART_ADD_ITEM,
    cartItems: _MOCK_USER_CART.cartItems,
    totals: _MOCK_USER_CART.totals
  });
};

export const updateCartTotals = () => dispatch => {
  _MOCK_USER_CART.totals = calculateCartTotals(_MOCK_USER_CART.cartItems);
  dispatch({ type: UPDATE_CART_TOTALS, totals: _MOCK_USER_CART.totals });
};

export const removeItemFromCart = itemId => dispatch => {
  const newItemsCollection = _MOCK_USER_CART.cartItems.filter(
    item => item.id !== itemId
  );
  _MOCK_USER_CART.cartItems = newItemsCollection;
  dispatch({ type: GET_USER_CART, data: _MOCK_USER_CART });
  updateCartTotals();
};
