import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
//this is something that is nice for us to use when debugging our redux code
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
//this configuration can be viewed on redux documenttation as well
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default { store, persistor };
