import { combineReducers } from "redux";
import { cocktailReducer } from "./cocktail/reducer";

const rootReducer = combineReducers({
  cocktail: cocktailReducer
});

export default rootReducer;
