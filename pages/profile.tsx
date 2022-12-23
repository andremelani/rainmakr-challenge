/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import Separator from "../src/components/Separator";
import { profile } from "../src/data/data";
import styles from "../styles/Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        {profile.map((item, index) => {
          return (
            <div key={index} className={styles.personalInfo}>
              <div className={styles.imgProfile}>
                <img src={item.imgProfile} alt={item.name} />
              </div>

              <h3>{item.name}</h3>
              <h5>{item.location}</h5>
              <h4>{item.descriprion}</h4>
              <div className={styles.dataContainer}>
                <div className={styles.infoContainer}>
                  <span>Engagement</span>
                  <span style={{ fontWeight: 700 }}>{item.engagement}%</span>
                </div>
                <Separator type="light" />
                <div className={styles.infoContainer}>
                  <span>Credibility</span>
                  <span style={{ fontWeight: 700 }}>{item.credibility}%</span>
                </div>
                <Separator type="light" />
                <div className={styles.infoContainer}>
                  <span>Followers</span>
                  <span style={{ fontWeight: 700 }}>{item.followers}</span>
                </div>
                <Separator type="light" />
                <div className={styles.infoContainer}>
                  <span>Likes</span>
                  <span style={{ fontWeight: 700 }}>{item.likes}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.socialMedia}>
          <img src="/icons/instagram.svg" alt="instagram" />
          <img src="/icons/tiktok.svg" alt="tiktok" />
          <img src="/icons/snapchat.svg" alt="snapchat" />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Direct book me" type="primarySmall" />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Follow" type="secondary" />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="My Store" type="tertiary" />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="My podcast" type="tertiary" />
        </div>
        <div className={styles.buttonContainer}>
          <Button text="Wish list" type="tertiary" />
        </div>
        <Footer />
      </div>

    </div>
  );
};

export default Profile;
