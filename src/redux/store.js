import { createStore, applyMiddleware } from "redux";
//this is something that is nice for us to use when debugging our redux code
import logger from "redux-logger";
import rootReducer from "./rootReducer";
//this configuration can be viewed on redux documenttation as well
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
