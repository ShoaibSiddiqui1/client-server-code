import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import * as reducers from "./reducers";

const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
