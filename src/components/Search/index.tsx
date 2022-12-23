import React, { ChangeEvent } from "react";
import styles from './styles.module.scss'

interface SearchInterface {
    placeholder: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
    icon?: string
}

const Search = ({onChange, placeholder, value, onClick}: SearchInterface) => {
  return (
    <div className={styles.wrapper}>
      <input onChange={onChange} placeholder={placeholder} value={value} />
      <button onClick={onClick}>
        <img src="/icons/filter.svg" alt="filter"/>
      </button>
    </div>
  );
};

export default Search;
