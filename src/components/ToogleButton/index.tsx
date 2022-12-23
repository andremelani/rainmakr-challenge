import React, { ChangeEvent } from "react";
import styles from "./styles.module.scss";

interface InputInterface {
  name: string;
  id: string;
  value: string;
  disabled?: boolean;
  text: string;
  onChange?: (event: ChangeEvent<HTMLElement>) => void;
  onClick?: () => void;
}

export function ToogleButton({
  disabled,
  name,
  id,
  value,
  text,
  onChange,
  onClick,
  ...rest
}: InputInterface) {


  return (
    <>
      <label className={styles.switch} >
        <input
          type="checkbox"
          onChange={onChange}
          onClick={onClick}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <span className={styles.text} style={{  fontWeight: '400'}}>{text}</span>
    </>
  );
}
