import { Action } from "../utils/action";

// constant
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const RESET = "RESET";

// action
export const loading = (): Action<{}> => ({
  type: LOADING
});
export const loaded = (): Action<{}> => ({
  type: LOADED
});
export const reset = (): Action<{}> => ({
  type: RESET
});

export type LoadingAction = Action<{}>;
