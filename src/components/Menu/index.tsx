/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { menuLogged } from "../../data/data";
import Separator from "../Separator";
import styles from "./styles.module.scss";

export interface MenuInterface {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Menu = ({ onClick }: MenuInterface) => {
  let currentUrl = window.location.pathname;

  const [isLogged, setIslogged] = useState(true);

  useEffect(() => {
    handleIsLogged();
  }, []);

  const handleIsLogged = () => {
    if (currentUrl === "/login" || currentUrl === "/singup") setIslogged(false);
    else setIslogged(true);
  };

  return (
    <div className={styles.menu}>
      {isLogged ? (
        <>
          {menuLogged?.map((item, index) => {
            return (
              <>
                {item.page === "MY PROFILE" ? (
                  <>
                    <div key={index} className={styles.menuItem}>
                      <div className={styles.iconContainer}>
                        <img
                          src={item.img}
                          alt={item.page}
                          className={styles.profile}
                        />
                      </div>
                      <Link
                        href={item.url}
                        className={styles.menuName}
                        onClick={onClick}
                        scroll={true}
                      >
                        {item.page}
                      </Link>
                    </div>
                    <Separator type="light" />
                  </>
                ) : (
                  <>
                    <div key={index} className={styles.menuItem}>
                      <div className={styles.iconContainer}>
                        <img src={item.img} alt={item.page} />
                      </div>
                      <Link
                        href={item.url}
                        className={styles.menuName}
                        onClick={onClick}
                        scroll={true}
                      >
                        {item.page}
                      </Link>
                    </div>
                    {item.page === "LOGOUT" ? null : <Separator type="light" />}
                  </>
                )}
              </>
            );
          })}
        </>
      ) : (
        <>
          <Link href="/login" className={styles.login} onClick={onClick}>
            LOGIN
          </Link>
          <Separator type="light" />
          <Link href="/singup" className={styles.signUp} onClick={onClick}>
            SIGN-UP
          </Link>
        </>
      )}
    </div>
  );
};

export default Menu;
