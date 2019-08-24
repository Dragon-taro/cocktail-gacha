import { Dispatch } from "redux";
import { loading, loaded } from "./actions";

export const setLoading = (url: string) => async (dispatch: Dispatch) => {
  dispatch(loading(url));

  // 2s待ってからロードを終わらせる
  await sleep(4999);

  dispatch(loaded());
};

const sleep = (msec: number): Promise<void> => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(), msec);
  });
};
