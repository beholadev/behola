import React from "react";
import styles from "@/styles/infostyles.module.css";
import MenuPosts from "../menuposts/MenuPosts";
import MenuCategories from "../menucategories/MenuCategories";

const InfoMenu = () => {
  return (
    <div className={styles.infomenucontainer}>
      <h2 className={styles.mesubtitle}>What's hot</h2>
      <h1 className={styles.metitle}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.mesubtitle}>Discover by topic</h2>
      <h1 className={styles.metitle}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.mesubtitle}>Choosen by editor</h2>
      <h1 className={styles.metitle}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default InfoMenu;
