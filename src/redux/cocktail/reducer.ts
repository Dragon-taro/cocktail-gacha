import { CocktailActions, EXEC_GACHA } from "./actions";
import { Cocktail } from "../../domain/entity/cocktail";

const init: Cocktail = {
  liqueur: "",
  base: "",
  name: ""
};

export const cocktailReducer = (
  state: Cocktail = init,
  action: CocktailActions
): Cocktail => {
  switch (action.type) {
    case EXEC_GACHA:
      return action.payload;
    default:
      return state;
  }
};
