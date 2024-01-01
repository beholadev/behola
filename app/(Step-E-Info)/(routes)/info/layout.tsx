import styles from "@/styles/infostyles.module.css";
import React from "react";
import InfoNavbar from "./compo/infonavbar/InfoNavbar";
import InfoFooter from "./compo/infofooter/InfoFooter";

const infolayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.inforoot}>
      <div className={styles.infobody}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <InfoNavbar />
            {children}
            <InfoFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default infolayout;
