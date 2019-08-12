import * as React from "react";
import classNames from "classnames";

import { Props } from "./type";
import { container } from "./style.css";

import Button from "../../parts/Button";

const Index: React.FunctionComponent<Props> = props => {
  const {
    cocktail: { name, base, base2, accent: secret },
    execGacha,
    execNonAlcoholGacha
  } = props;

  return (
    <div className={classNames(container)}>
      <h1>カクテルガチャ</h1>
      <Button onClick={() => execGacha()}>ガチャる（カクテル）</Button>
      <Button onClick={() => execNonAlcoholGacha()}>
        ガチャる（ノンアル）
      </Button>
      {name && <h2>カクテル名: {name}</h2>}
      <div>
        {base && <div>ベース: {base}</div>}
        {base2 && <div>割材: {base2}</div>}
        {secret && <div>隠し味: {secret}</div>}
      </div>
    </div>
  );
};

export default Index;
