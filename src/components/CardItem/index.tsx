import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
import Separator from "../Separator";
import styles from "./styles.module.scss";


const CardItem = ({ item }: any) => {


  const router = useRouter()

  const handleCardDetails = () => {
    router.push(`/${item.id}`)
  }
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <h4>{item.brand}</h4>
        <h4>FIT</h4>
      </div>
      <div className={styles.subtitle}>
        <h3>{item.subtitle}</h3>
        <span>{item.fit}%</span>
      </div>
      <Separator type="darkLight" />
      <div className={styles.start}>
        <span>Start:</span>
        <h4>{item.start}</h4>
      </div>
      <div className={styles.delivery}>
        <span>Delivery:</span>
        <h4>{item.delivery}</h4>
      </div>
      <h2 className={styles.segment}>{item.segment}</h2>
      <Separator type="darkLight" />
      <div className={styles.platform}>
        <span>PLATFORMS</span>
        <div className={styles.platforms}>
          <img src={item.platforms} alt="" />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button type="primarySmall" text="Get it" onClick={handleCardDetails} />
      </div>
    </div>
  );
};

export default CardItem;
