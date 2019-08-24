import {
  LOADING,
  LoadingAction,
  LOADED,
  RESET,
  LoadingPayload
} from "./actions";
import { Loading } from "../../domain/entity/loading";

const init: Loading = {
  loading: false,
  isDoneGacha: false,
  url: ""
};

const reducer: {
  [key: string]: (
    state: Loading,
    payload: LoadingPayload | undefined | {}
  ) => Loading;
} = {
  [LOADING]: (state, payload: any) => ({
    ...state,
    url: payload && payload.url,
    loading: true
  }),
  [LOADED]: state => ({
    ...state,
    loading: false,
    isDoneGacha: true
  }),
  [RESET]: state => ({
    ...state,
    loading: false,
    isDoneGacha: false
  })
};

export const loadingReducer = (
  state: Loading = init,
  action: LoadingAction
): Loading => {
  const { type, payload } = action;
  const _reducer = reducer[type];

  return _reducer ? _reducer(state, payload) : state;
};
