import React from "react";
import styles from "@/styles/infostyles.module.css";
import InfoPagination from "../infopagination/InfoPagination";
import InfoCard from "../infocard/InfoCard";

const InfoCardlist = () => {
  return (
    <div className={styles.infocardlistcontainer}>
      <h1 className={styles.cltitle}>Recent Posts</h1>
      <div className={styles.posts}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <InfoPagination />
    </div>
  );
};

export default InfoCardlist;
