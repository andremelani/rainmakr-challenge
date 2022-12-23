import React, { ChangeEvent } from "react";
import styles from "./styles.module.scss";

interface InputInterface {
  placeholder: string;
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  icon?: string
}

const Input = ({
  placeholder,
  type,
  onChange,
  onClick,
  value,
  icon
}: InputInterface) => {
  let button;

  if (type === "password" && icon === "password") {
    button = <img src="/icons/eye.svg" alt="close" className={styles.icon} />;
  } else if (type === "text" && icon === "password") {
    button = (
      <img src="/icons/closeEye.svg" alt="close" className={styles.icon} />
    );
  } else if(icon !== 'password')
  button = <img src="/icons/close.svg" alt="close" className={styles.icon} />;

  return (
    <div className={styles.wrapper}>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <button onClick={onClick}>
        {button}
      </button>
    </div>
  );
};

export default Input;
