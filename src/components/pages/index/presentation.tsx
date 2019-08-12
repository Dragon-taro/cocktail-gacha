import * as React from "react";
import { Props } from "./type";
import * as styles from "./style.css";

const Index: React.FunctionComponent<Props> = props => {
  const {
    cocktail: { name, base, base2, accent: secret },
    execGacha,
    execNonAlcoholGacha
  } = props;

  console.log(styles.container);

  return (
    <div className={styles.container}>
      <h1>カクテルガチャ</h1>
      <button onClick={() => execGacha()}>ガチャる（カクテル）</button>
      <button onClick={() => execNonAlcoholGacha()}>
        ガチャる（ノンアル）
      </button>
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
