import * as React from "react";
import classNames from "classnames";

import { ButtonProps } from "./type";
import { button, black } from "./style.css";

const BlackButton: React.FunctionComponent<ButtonProps> = props => {
  const { onClick, className, children } = props;

  return (
    <button className={classNames(button, className, black)} onClick={onClick}>
      {children}
    </button>
  );
};

export default BlackButton;
