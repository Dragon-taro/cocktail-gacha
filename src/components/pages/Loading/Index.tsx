import * as React from "react";
import { loading } from "./style.css";

const Loading: React.FunctionComponent<{}> = () => {
  return (
    <div className={loading}>
      <p>Creating Your Cocktail...</p>
    </div>
  );
};

export default Loading;
