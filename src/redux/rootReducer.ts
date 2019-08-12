import { combineReducers } from "redux";
import { cocktailReducer } from "./cocktail/reducer";
import { loadingReducer } from "./loading/reducer";

const rootReducer = combineReducers({
  cocktail: cocktailReducer,
  loading: loadingReducer
});

export default rootReducer;
