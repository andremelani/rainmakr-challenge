import React from "react";
import styles from "./styles.module.scss";

interface ButtonInterface {
  text: string;
  onClick?: () => void;
  type: "primary" | "secondary" | "tertiary" | "primarySmall";
}

const Button = ({ text, onClick, type }: ButtonInterface) => {
  const background = {
    primary: "#20DEF6",
    secondary: "transparent",
    tertiary: "transparent",
    primarySmall: "#20DEF6",
  };
  const border = {
    primary: "none",
    secondary: "2px solid #20DEF6",
    tertiary: "2px solid #5D818D",
    primarySmall: "none",
  };
  const color = {
    primary: "#0E181A",
    secondary: "#20DEF6",
    tertiary: "#5D818D",
    primarySmall: "#0E181A",
  };
  const padding = {
    primary: "12px 0",
    secondary: "8px",
    tertiary: "8px",
    primarySmall: "8px",
  }
  return (
    <div className={styles.container}>
      <button
        style={{
          background: background[type],
          border: border[type],
          color: color[type],
          padding: padding[type]
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
