import * as React from "react";
import classNames from "classnames";

import { Props } from "./type";
import { container } from "./style.css";

import Loading from "../../pages/Loading/Index";
import Result from "../../pages/Result/container";
import Index from "../../pages/Index/container";

const Application: React.FunctionComponent<Props> = props => {
  const {
    loading: { loading, isDoneGacha }
  } = props;

  const isLoading = loading;
  const isResult = !loading && isDoneGacha;
  const isIndex = !isLoading && !isResult;

  return (
    <div className={classNames(container)}>
      {isLoading && <Loading />}
      {isResult && <Result />}
      {isIndex && <Index />}
    </div>
  );
};

export default Application;
