import * as React from "react";
import classNames from "classnames";

import { Props } from "./type";
import { container } from "./style.css";

import Button from "../../parts/Button";

const Index: React.FunctionComponent<Props> = props => {
  const {
    cocktail: { name, base, base2, accent: secret },
    loading,
    execGacha,
    execNonAlcoholGacha
  } = props;

  console.log(loading);

  return (
    <div className={classNames(container)}>
      <h1>カクテルガチャ</h1>
      <Button onClick={() => execGacha()}>ガチャる（カクテル）</Button>
      <Button onClick={() => execNonAlcoholGacha()}>
        ガチャる（ノンアル）
      </Button>
    </div>
  );
};

export default Index;
