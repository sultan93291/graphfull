import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ btnTxt, className, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(
        "h-auto w-auto px-5 py-2 bg-primary-yellow text-primary-dark-blue font-bold rounded-[8px] cursor-pointer ease-in-out duration-500 hover:bg-transparent border-[1px] border-transparent hover:border-solid hover:border-primary-yellow hover:text-primary-yellow  ",
        className
      )}
    >
      {btnTxt}
    </button>
  );
};

export default Button;
