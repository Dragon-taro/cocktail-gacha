import configureStore from "redux-mock-store";
import { Middleware, AnyAction } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { Loading } from "../../../domain/entity/loading";
import { setLoading } from "../../../redux/loading/effects";
import { Action } from "../../../redux/utils/action";
import {
  LOADING,
  LOADED,
  LoadingPayload
} from "../../../redux/loading/actions";

const middlewares: Middleware[] = [thunk];
const mockStore = configureStore<
  Loading,
  ThunkDispatch<Loading, void, AnyAction>
>(middlewares);

const init: Loading = {
  loading: false,
  isDoneGacha: false,
  url: ""
};

it("非同期の二つのアクションがdispatchされているか", async () => {
  const loadingExpected: Action<LoadingPayload> = {
    type: LOADING,
    payload: { url: "" }
  };
  const loadedExpected: Action<{}> = { type: LOADED };

  const store = mockStore(init);
  await store.dispatch(setLoading(""));
  const actions = store.getActions();

  expect(actions[0]).toEqual(loadingExpected);
  expect(actions[1]).toEqual(loadedExpected);
});
