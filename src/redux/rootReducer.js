// root reducer represents the overall reducer based on all of the reducers that
//it pulls in in order for us to combine them all together.
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//this tells redux-persist, i wanna use local storage as default storage
//or can use sessionStorage
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
export default persistReducer(persistConfig, rootReducer);
