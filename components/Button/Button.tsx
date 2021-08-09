import React from "react";
import classnames from "classnames";

type Props = {
  onClick: () => void;
  text: string | React.ReactElement;
  className?: string;
};

export const Button = ({ onClick, text, className }: Props) => {
  return (
    <button onClick={onClick} className={classnames("Button", className)}>
      {text}
    </button>
  );
};
