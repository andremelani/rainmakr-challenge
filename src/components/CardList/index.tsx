import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";

import styles from "./styles.module.scss";

export type CardItem = {
  id: number;
  brand: string;
  fit: number;
  subtitle: string;
  segment: string;
  start: string;
  delivery: string;
  platforms: string;
  platform: string;
  gender: string;
  location: string;
  followers: string;
  age: string;
  startData: string;
  deliveryData: string;
};

interface Data {
  cards: CardItem[]
}

const CardList = ({cards} :Data) => {
 

  return (
    <div className={styles.container}>
      {cards.map((item: CardItem) => {
        return <CardItem item={item} key={item?.id} />;
      })}
    </div>
  );
};

export default CardList;
