/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./styles.module.scss";

import Menu from "../Menu";
import { useRouter } from "next/router";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  const handleHome = () => {
    router.push('/')
    setIsOpen(false)
  }


  return (
    <>
      <div className={styles.container} id='top'>
        <img src="images/logoNavbar.png" alt="logo" className={styles.logo} onClick={handleHome} />
        <img
          src="icons/menu.svg"
          alt="menu"
          className={styles.logo}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? <Menu onClick={() => setIsOpen(!isOpen)} /> : null}
    </>
  );
};

export default Navbar;
