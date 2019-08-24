import { Loading } from "../../../domain/entity/loading";
import { loadingReducer } from "../../../redux/loading/reducer";
import { loading, loaded, reset } from "../../../redux/loading/actions";

const init: Loading = {
  loading: false,
  isDoneGacha: false,
  url: ""
};

describe("loadingReducerが正しく動いているか", () => {
  it("LODING", () => {
    const expected: Loading = {
      loading: true,
      url: "",
      isDoneGacha: false
    };

    expect(loadingReducer(init, loading())).toEqual(expected);
  });

  it("LOADED", () => {
    const expected: Loading = {
      loading: false,
      url: "",
      isDoneGacha: true
    };

    expect(loadingReducer(init, loaded())).toEqual(expected);
  });

  it("RESET", () => {
    const expected: Loading = {
      loading: false,
      url: "",
      isDoneGacha: false
    };

    expect(loadingReducer(init, reset())).toEqual(expected);
  });
});
