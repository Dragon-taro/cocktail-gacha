import * as React from "react";
import classNames from "classnames";

import { Props } from "./type";
import { container } from "./style.css";

const Result: React.FunctionComponent<Props> = props => {
  const {
    cocktail: { name, base, base2, accent: secret }
  } = props;

  return (
    <div className={classNames(container)}>
      <h1>カクテルガチャ</h1>
      {name && <h2>カクテル名: {name}</h2>}
      <div>
        {base && <div>ベース: {base}</div>}
        {base2 && <div>割材: {base2}</div>}
        {secret && <div>隠し味: {secret}</div>}
      </div>
    </div>
  );
};

export default Result;
