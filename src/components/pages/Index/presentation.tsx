import * as React from "react";
import classNames from "classnames";

import { Props } from "./type";
import { container } from "./style.css";

import Button from "../../parts/Button";

const Index: React.FunctionComponent<Props> = props => {
  const { execGacha, execNonAlcoholGacha } = props;

  return (
    <div className={classNames(container)}>
      <h1>カクテルガチャ</h1>
      <p>カクテルガチャを回す</p>
      <Button onClick={() => execGacha()}>ガチャる（カクテル）</Button>
      <p>ノンアルの方はこちら</p>
      <Button onClick={() => execNonAlcoholGacha()}>
        ガチャる（ノンアル）
      </Button>
    </div>
  );
};

export default Index;
