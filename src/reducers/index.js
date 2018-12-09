import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import itemDetailReducer from "./itemDetailReducer";

export default combineReducers({
  items: itemsReducer,
  itemDetail: itemDetailReducer
});
