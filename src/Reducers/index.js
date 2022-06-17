import { combineReducers } from "@reduxjs/toolkit";
import MemberReducer from "./Member";
import SearchReducer from "./Search";

const allReducers = combineReducers({
    Member: MemberReducer,
    Search: SearchReducer,
});

export default allReducers;