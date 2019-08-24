import { Action } from "../utils/action";

// constant
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const RESET = "RESET";

export interface LoadingPayload {
  url: string;
}

// action
export const loading = (url?: string): Action<LoadingPayload> => ({
  type: LOADING,
  payload: { url: url || "" }
});
export const loaded = (): Action<{}> => ({
  type: LOADED
});
export const reset = (): Action<{}> => ({
  type: RESET
});

export type LoadingAction = Action<{}> | Action<LoadingPayload>;
