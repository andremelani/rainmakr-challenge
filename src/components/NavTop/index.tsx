import Link from "next/link";
import React, { useState } from "react";
import Brands from "../Brands";
import Creators from "../Creators";
import { MenuInterface } from "../Menu";
import Rainjobs from "../Rainjobs";
import styles from "./styles.module.scss";

interface Selected {
    color :string,
    border: string
}

const Navtop = () => {
  const [rainjobs, setRainjobs] = useState(true);
  const [brands, setBrands] = useState(false);
  const [creators, setCreators] = useState(false);
  const [state, setState] = useState(<Rainjobs />);

    const handleRainjobsActive = () => {
        setRainjobs(true)
        setBrands(false)
        setCreators(false)
        setState(<Rainjobs />)
    }
    const handleBrandsActive = () => {
        setRainjobs(false)
        setBrands(true)
        setCreators(false)
        setState(<Brands />)
    }
    const handleCreatorsActive = () => {
        setRainjobs(false)
        setBrands(false)
        setCreators(true)
        setState(<Creators />)
    }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          <Link href="/" onClick={handleRainjobsActive} style={rainjobs ? {color: '#ffffff', borderBottom: "3px solid #ffffff",}: {}} >
            RAINJOBS
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/" onClick={handleBrandsActive} style={brands ? {color: '#ffffff', borderBottom: "3px solid #ffffff",}: {}}>
            BRANDS
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/" onClick={handleCreatorsActive} style={creators ? {color: '#ffffff', borderBottom: "3px solid #ffffff",}: {}}>
            CREATORS
          </Link>
        </div>
      </div>
      {state}
    </>
  );
};

export default Navtop;
