import React from "react";

export const Button = (props) => {
  const { size, color, title, onClick } = props;

  const defaultClass =
    "flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2 transition-colors duration-200";

  const classes = {
    colors: {
      primary: {
        button: "bg-red-600 hover:bg-red-900 active:bg-green-700",
        text: "text-white",
      },
      secondary: {
        button: "bg-green-600 hover:bg-green-900 active:bg-green-700",
        text: "text-white",
      },
    },
    sizes: {
      small: "rounded-[100px] text-sm",
      medium: "rounded-[14px] text-base",
      large: "rounded-[16px] text-base min-h-[56px]",
    },
  };

  return (
    <div
      className={
        defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].button
      }
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className={classes.colors[color].text}>{title}</div>
    </div>
  );
};