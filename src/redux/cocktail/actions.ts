import GachaService from "../../domain/service/gacha";
import { Action } from "../utils/action";
import { Cocktail } from "../../domain/entity/cocktail";

// constant
export const EXEC_GACHA = "EXEC_GACHA";

// action
export const execGacha = (gacha: GachaService): Action<Cocktail> => ({
  type: EXEC_GACHA,
  payload: gacha.getState()
});

export type CocktailActions = Action<Cocktail>;
