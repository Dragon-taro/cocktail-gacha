import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./redux/rootReducer";
import Index from "./components/pages/Index/container";

const store = createStore(rootReducer);

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
