import React from "react";
import styles from "@/styles/infostyles.module.css";

const InfoPagination = () => {
  return (
    <div className={styles.infopaginationcontainer}>
      <button className={styles.pnbutton}>Previous</button>
      <button className={styles.pnbutton}>Next</button>
    </div>
  );
};

export default InfoPagination;
