// creating redux store
// 1) initial state
// 2) reducer

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const initialState = {};

//reducer returns list of products
const reducer = combineReducers({
  productList: productListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
