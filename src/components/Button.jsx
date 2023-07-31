import React from "react";

const Button = ({ styles, title }) => {
  return (
    <button
      type="button"
      className={`${styles} font-poppins font-medium text-[18px] text-primary outline-none py-4 px-6 bg-blue-gradient  rounded-[10px]`}
    >
      {title}
    </button>
  );
};

export default Button;
