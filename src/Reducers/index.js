import { combineReducers } from "@reduxjs/toolkit";
import MemberReducer from "./Member";

const allReducers = combineReducers({
    Member:MemberReducer,
});

export default allReducers;