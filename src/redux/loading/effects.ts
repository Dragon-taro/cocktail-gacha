import { Dispatch } from "redux";
import { loading, loaded } from "./actions";

export const setLoading = () => async (dispatch: Dispatch) => {
  dispatch(loading());

  // 2s待ってからロードを終わらせる
  await sleep(2000);

  dispatch(loaded());
};

const sleep = (msec: number): Promise<void> => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(), msec);
  });
};
