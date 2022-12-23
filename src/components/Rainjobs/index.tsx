import React, { useEffect, useState } from "react";
import { ToogleButton } from "../ToogleButton";
import Search from "../Search";
import Select from "../Select";
import Separator from "../Separator";
import styles from "./styles.module.scss";
import Button from "../Button";
import Title from "../Title";
import CardList, { CardItem } from "../CardList";

const Rainjobs = () => {
  const [search, setSearch] = useState("");
  const [openFilters, setOpenFilters] = useState(false);
  const [toogle1, setToogle1] = useState(false);
  const [toogle2, setToogle2] = useState(false);
  const [data, setData] = useState([]);

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

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  };
  const lowerCase = search.toLowerCase();
  const filter = data.filter(
    (item: CardItem) =>
      item.brand.toLowerCase().includes(lowerCase) ||
      item.location.toLowerCase().includes(lowerCase) ||
      item.segment.toLowerCase().includes(lowerCase)
  );

  return (
    <div className={styles.container}>
      <Search
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={handleOpenFilters}
      />
      {openFilters ? (
        <div className={styles.filterContainer}>
          <h5>FILTERS</h5>
          <Select label="FIT">
            <option>Any</option>
          </Select>
          <Select label="SEGMENT">
            <option>All</option>
          </Select>
          <Select label="PLATFORM">
            <option>All</option>
          </Select>
          <Select label="LOCATION">
            <option>Yours</option>
          </Select>
          <Separator type="dark" />
          <h5>EXIBITION</h5>
          <div className={styles.toogleContainer}>
            <div className={styles.toogle}>
              <ToogleButton
                id="blockers"
                name="blockers"
                value="blockers"
                text="Blockers:"
                onChange={() => setToogle1(!toogle1)}
                onClick={() => setToogle1(!toogle1)}
              />
              {toogle1 ? <span> On</span> : <span> Off</span>}
            </div>
            <div className={styles.toogle}>
              <ToogleButton
                id="endedJobs"
                name="endedJobs"
                value="endedJobs"
                text="Show ended jobs:"
                onChange={() => setToogle2(!toogle2)}
                onClick={() => setToogle2(!toogle2)}
              />
              {toogle2 ? <span> On</span> : <span> Off</span>}
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div className={styles.buttonContainer}>
              <Button type="tertiary" text="Refine the Result" />
            </div>
          </div>
        </div>
      ) : null}

      <Title text="YOUR FIT" />
      <CardList cards={filter} />
    </div>
  );
};

export default Rainjobs;
