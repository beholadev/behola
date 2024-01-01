import React from "react";
import styles from "@/styles/infostyles.module.css";
import Link from "next/link";
import Image from "next/image";

const InfoCategorylist = () => {
  return (
    <div>
      <div className={styles.infocategorylistcontainer}>
        <div className={styles.cattitle}>
          <h1>Popular Categories</h1>
        </div>
        <div className={styles.categoriesca}>
          <Link
            href="/info?cat=cataiinnovations"
            className={`${styles.categoryca} ${styles.cataiinnovations}`}
          >
            <Image
              src="/aiinnovations.png"
              alt="aiinnovations Category"
              width={32}
              height={32}
              className={styles.catimage}
            />
            New Tech
          </Link>
          <Link
            href="/info?cat=cattechtrends"
            className={`${styles.categoryca} ${styles.cattechtrends}`}
          >
            <Image
              src="/techtrends.png"
              alt="techtrends Category"
              width={32}
              height={32}
              className={styles.catimage}
            />
            Trends
          </Link>
          <Link
            href="/info?cat=catcreativeaiapplications"
            className={`${styles.categoryca} ${styles.catcreativeaiapplications}`}
          >
            <Image
              src="/creativeaiapplications.png"
              alt="creativeaiapplications Category"
              width={32}
              height={32}
              className={styles.catimage}
            />
            Apps
          </Link>
          <Link
            href="/info?cat=catethicsintechnology"
            className={`${styles.categoryca} ${styles.catethicsintechnology}`}
          >
            <Image
              src="/ethicsintechnology.png"
              alt="ethicsintechnology Category"
              width={32}
              height={32}
              className={styles.catimage}
            />
            Ethics
          </Link>
          <Link
            href="/info?cat=catlearningai"
            className={`${styles.categoryca} ${styles.catlearningai}`}
          >
            <Image
              src="/learningai.png"
              alt="learningai Category"
              width={32}
              height={32}
              className={styles.catimage}
            />
            Learning
          </Link>
          <Link
            href="/info?cat=catfutureofwork"
            className={`${styles.categoryca} ${styles.catfutureofwork}`}
          >
            <Image
              src="/futureofwork.png"
              alt="futureofwork Category"
              width={32}
              height={32}
              className={styles.catimage}
            />
            Future
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCategorylist;
