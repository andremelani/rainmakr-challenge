/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CardItem } from "../src/components/CardList";
import Modal from "../src/components/Modal";
import Separator from "../src/components/Separator";
import styles from "../styles/Details.module.scss";

const Details = () => {
  const { query }: any = useRouter();

  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getData = () => {
    fetch("./data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const rainjob: CardItem[] = data.filter(
    (item: CardItem) => item.id === parseInt(query.id)
  );

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <Link href="/">&lt; Back to Rainjobs</Link>
      </div>

      {rainjob.map((item: CardItem) => {
        return (
          <>
            <div key={item.id} className={styles.infoContainer}>
              <div className={styles.brand}>
                <div className={styles.brandContainer}>
                  <img src="/images/logoBrand.png" alt="" />
                  <div className={styles.brandName}>
                    <span>{item.brand}</span>
                    <h5>{item.subtitle}</h5>
                  </div>
                </div>

                <div className={styles.box}>
                  <span>FIT</span>
                  <h4>{item.fit}%</h4>
                </div>
              </div>
              <Separator type="dark" />
              <h3>{item.segment}</h3>
              <div className={styles.brandInfo}>
                <span>
                  <b>Platform: </b>
                  {item.platform}
                </span>

                <span>
                  <b>Followers: </b>
                  {item.followers}
                </span>

                <span>
                  <b>Gender: </b>
                  {item.gender}
                </span>

                <span>
                  <b>Age: </b>
                  {item.age}
                </span>

                <span>
                  <b>Location: </b>
                  {item.location}
                </span>
              </div>
              <h3 style={{ color: "#ED1E79" }}>PLATFORMS</h3>
              <div className={styles.platformContainer}>
                <img src={item.platforms} alt={item.platform} />
              </div>
              <Separator type="dark" />
              <h3 style={{ color: "#FF6B00" }}>INFO</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                quis scelerisque tellus. In ultricies risus vel eros sodales,
                molestie dictum libero tincidunt. Integer vel sodales tortor.
                Praesent laoreet faucibus sollicitudin. Ut rutrum nulla eget
                nisl gravida imperdiet. Nulla lacinia libero orci, vel
                pellentesque odio efficitur vel. Vestibulum eget consectetur
                ipsum. Proin placerat, justo quis faucibus sagittis, quam lectus
                dapibus neque, id maximus eros quam ac enim. In eu porttitor
                lectus. Donec at arcu metus. Aliquam pretium elit tincidunt,
                <br></br>
                <br></br>
                egestas quam nec, placerat nunc. Fusce orci nibh, porttitor vel
                semper nec, congue id justo. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Curabitur faucibus lectus a sapien efficitur varius
                vitae vitae eros. <br></br>
                <br></br>Curabitur nec sollicitudin diam, non varius augue.
                Donec vulputate maximus massa ultricies lacinia. Fusce faucibus
                nulla nec enim aliquet, in sodales libero iaculis. Integer vitae
                massa auctor, commodo neque vel, feugiat elit. Donec porttitor
                eget orci posuere convallis. Duis sit amet turpis cursus,
                interdum risus non, venenatis nibh. Quisque dictum cursus libero
                sed vestibulum. Etiam sit amet efficitur lacus. Quisque vel
                sollicitudin purus. Nulla congue vel sapien vel dapibus. Nullam
                eget felis sed purus eleifend varius nec non turpis. Sed sed
                ornare augue. Fusce tristique arcu in massa posuere mattis.
              </p>
              <span className={styles.data}>
                <b>Start: </b>
                {item.startData}
              </span>
              <span className={styles.data}>
                <b>Delivery: </b>
                {item.deliveryData}
              </span>
              <Separator type="dark" />
              <div className={styles.buttonContainer}>
                <button className={styles.backButton} onClick={handleGoBack}>
                  &lt; Back to Rainjobs
                </button>
                <button
                  className={styles.get}
                  onClick={() => setOpenModal(true)}
                >
                  Get the Job
                </button>
              </div>
            </div>
          </>
        );
      })}

      {openModal ? (
        <Modal>
          <div className={styles.modalContainer}>
            <h2>GOOD LUCK</h2>
            <p>Continue searching the perfect RainJobs for you.</p>
            <button className={styles.backButtonModal} onClick={handleGoBack}>
              Back to Rainjobs
            </button>
            <button
              className={styles.backJob}
              onClick={() => setOpenModal(false)}
            >
              Back to the actual job
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Details;
