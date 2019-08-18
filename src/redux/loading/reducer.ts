import { LOADING, LoadingAction, LOADED, RESET } from "./actions";
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
  [LOADED]: _state => ({
    loading: false,
    isDoneGacha: true
  }),
  [RESET]: _state => ({
    loading: false,
    isDoneGacha: false
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
