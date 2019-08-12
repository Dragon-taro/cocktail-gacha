import { Action } from "../utils/action";

// constant
export const LOADING = "LOADING";
export const LOADED = "LOADED";

// action
export const loading = (): Action<{}> => ({
  type: LOADING
});
export const loaded = (): Action<{}> => ({
  type: LOADED
});

export type LoadingAction = Action<{}>;
