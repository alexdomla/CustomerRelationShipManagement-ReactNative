import { combineReducers } from "redux";
import customer from "../features/Customer/reducers";

const rootReducer = combineReducers({
  customer,
});

export default rootReducer;
