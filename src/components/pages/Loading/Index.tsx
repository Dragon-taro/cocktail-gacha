import * as React from "react";
import { loading } from "./style.css";

const Loading: React.FunctionComponent<{}> = () => {
  return (
    <div className={loading}>
      <div>
        <img src="create-kacktail.gif" />
      </div>
    </div>
  );
};

export default Loading;
