import { combineReducers } from "redux";
import Api from "./ApiReducer";

const root = combineReducers({
    ApiUser : Api
}) 

export default root