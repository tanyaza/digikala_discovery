import listData from "./listData";
import detailData from "./detailData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	listData,
	detailData,
});

export default rootReducer;
