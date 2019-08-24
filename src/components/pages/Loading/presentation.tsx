import * as React from "react";
import { loading, flash, button } from "./style.css";

import BlackButton from "../../parts/Button/black";
import { Props } from "./type";

const Loading: React.FunctionComponent<Props> = ({
  skipLoading,
  loading: { url }
}) => {
  return (
    <div className={loading}>
      <p className={flash}>Creating Cocktail...</p>
      <div>
        <img src={url} />
      </div>
      <div className={button}>
        <BlackButton onClick={skipLoading} color="black">
          Skip >>
        </BlackButton>
      </div>
    </div>
  );
};

export default Loading;
