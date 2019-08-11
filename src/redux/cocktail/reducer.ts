import { CocktailActions, EXEC_GACHA } from "./actions";
import { Cocktail } from "../../domain/entity/cocktail";

const init: Cocktail = {
  base: "",
  base2: "",
  name: ""
};

const reducer: {
  [key: string]: (state: Cocktail, payload: Cocktail) => Cocktail;
} = {
  [EXEC_GACHA]: (_, payload) => payload
};

export const cocktailReducer = (
  state: Cocktail = init,
  action: CocktailActions
): Cocktail => {
  const { payload, type } = action;
  const _reducer = reducer[type];

  return _reducer ? _reducer(state, payload) : state;
};
