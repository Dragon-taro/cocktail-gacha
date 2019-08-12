import { Dispatch } from "redux";
import { LoadingAction, loading, loaded } from "./actions";

export const setLoading = () => async (dispatch: Dispatch) => {
  dispatch(loading());

  // 5s待ってからロードを終わらせる
  await sleep(2000);

  dispatch(loaded());
};

const sleep = (msec: number): Promise<void> => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(), msec);
  });
};
