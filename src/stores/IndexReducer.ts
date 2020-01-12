import { combineReducers } from "redux";
import { LayoutReducer } from "./layout/Reducer";

export const RootReducer = combineReducers({
	layoutReducer: LayoutReducer
});
