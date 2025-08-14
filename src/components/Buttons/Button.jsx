import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ btnTxt, className, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(
        className
      )}
    >
      {btnTxt}
    </button>
  );
};

export default Button;
