import * as React from "react";
import classNames from "classnames";

import { ButtonProps } from "./type";
import { button } from "./style.css";

const Button: React.FunctionComponent<ButtonProps> = props => {
  const { onClick, className, children } = props;

  return (
    <button className={classNames(button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
