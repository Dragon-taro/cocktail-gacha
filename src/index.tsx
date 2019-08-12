import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./redux/rootReducer";
import Index from "./components/pages/Index/container";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
