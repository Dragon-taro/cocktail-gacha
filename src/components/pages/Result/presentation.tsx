import * as React from "react";
import classNames from "classnames";

import { Props } from "./type";
import Button from "../../parts/Button";
import {
  container,
  resultContent,
  tr,
  animation1,
  animation2,
  animation3,
  animation4
} from "./style.css";

const Result: React.FunctionComponent<Props> = props => {
  const {
    cocktail: { name, base, base2, accent: secret },
    backToTop
  } = props;

  return (
    <div className={classNames(container)}>
      {name && <h2 className={animation1}>{name}</h2>}
      <table className={resultContent}>
        <tbody>
          {base && (
            <tr className={classNames(tr, animation2)}>
              <th>ベース</th>
              <td>{base}</td>
            </tr>
          )}
          {base2 && (
            <tr className={classNames(tr, animation3)}>
              <th>割材</th>
              <td>{base2}</td>
            </tr>
          )}
          {secret && (
            <tr className={classNames(tr, animation4)}>
              <th>隠し味</th>
              <td>{secret}</td>
            </tr>
          )}
        </tbody>
      </table>
      <Button onClick={backToTop}>Topに戻る</Button>
    </div>
  );
};

export default Result;
