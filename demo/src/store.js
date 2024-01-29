import { applyMiddleware, createStore } from "redux";
import root from "./Reducer";
import { thunk } from "redux-thunk";

const store = createStore(root,applyMiddleware(thunk))

export default store