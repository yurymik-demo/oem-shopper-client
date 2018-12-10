import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import itemDetailReducer from "./itemDetailReducer";
import userCartReducer from "./cartReducer";

export default combineReducers({
  items: itemsReducer,
  itemDetail: itemDetailReducer,
  userCart: userCartReducer
});
