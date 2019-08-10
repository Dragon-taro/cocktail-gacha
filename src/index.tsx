import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

const App: React.FunctionComponent = () => (
  <Provider store={store}>hello</Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
