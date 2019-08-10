import * as React from "react";
import { Props } from "./type";

const Index: React.FunctionComponent<Props> = props => {
  const {
    cocktail: { name, liqueur, base, secret },
    execGacha
  } = props;

  return (
    <div>
      <h1>カクテルガチャ</h1>
      <button onClick={() => execGacha()}>ガチャる</button>
      {name && <h2>カクテル名: {name}</h2>}
      <div>
        {liqueur && <div>リキュール: {liqueur}</div>}
        {base && <div>ベース: {base}</div>}
        {secret && <div>隠し味: {secret}</div>}
      </div>
    </div>
  );
};

export default Index;
