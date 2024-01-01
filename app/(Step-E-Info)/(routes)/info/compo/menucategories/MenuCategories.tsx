import Link from "next/link";
import styles from "@/styles/infostyles.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.mmmcategorylist}>
      <Link
        href={"/info?cat=catnewtech"}
        className={`${styles.mmmcategory} ${styles.catnewtech}`}
      >
        New Tech
      </Link>

      <Link
        href={"/info?cat=cattrends"}
        className={`${styles.mmmcategory} ${styles.cattrends}`}
      >
        Trends
      </Link>

      <Link
        href={"/info?cat=catapps"}
        className={`${styles.mmmcategory} ${styles.catapps}`}
      >
        Apps
      </Link>

      <Link
        href={"/info?cat=catethics"}
        className={`${styles.mmmcategory} ${styles.catethics}`}
      >
        Ethics
      </Link>

      <Link
        href={"/info?cat=catlearning"}
        className={`${styles.mmmcategory} ${styles.catlearning}`}
      >
        Learning
      </Link>

      <Link
        href={"/info?cat=catfuture"}
        className={`${styles.mmmcategory} ${styles.catfuture}`}
      >
        Future
      </Link>
    </div>
  );
};

export default MenuCategories;
