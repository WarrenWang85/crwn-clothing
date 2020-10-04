// root reducer represents the overall reducer based on all of the reducers that
//it pulls in in order for us to combine them all together.
import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";

export default combineReducers({ user: userReducer, cart: cartReducer });
