import { LOADING, LoadingAction, LOADED } from "./actions";
import { Loading } from "../../domain/entity/loading";

const init: Loading = {
  loading: false,
  isDoneGacha: false
};

const reducer: {
  [key: string]: (state: Loading) => Loading;
} = {
  [LOADING]: state => ({
    ...state,
    loading: true
  }),
  [LOADED]: state => ({
    ...state,
    loading: false,
    isDoneGacha: true
  })
};

export const loadingReducer = (
  state: Loading = init,
  action: LoadingAction
): Loading => {
  const { type } = action;
  const _reducer = reducer[type];

  return _reducer ? _reducer(state) : state;
};
