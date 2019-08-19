import * as React from "react";
import classNames from "classnames";

import { Props } from "./type";
import { container, content } from "./style.css";

import Button from "../../parts/Button";

const Index: React.FunctionComponent<Props> = props => {
  const { execGacha, execNonAlcoholGacha } = props;

  return (
    <div className={classNames(container)}>
      <h1>カクテルガチャ</h1>
      <div className={content}>
        <p>カクテルガチャを回す</p>
        <Button onClick={() => execGacha()}>ガチャる（カクテル）</Button>
      </div>
      <div className={content}>
        <p>ノンアルの方はこちら</p>
        <Button onClick={() => execNonAlcoholGacha()}>
          ガチャる（ノンアル）
        </Button>
      </div>
    </div>
  );
};

export default Index;
