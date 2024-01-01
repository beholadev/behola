import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/infostyles.module.css";
import React from "react";

const MenuPosts = ({ withImage }: { withImage: boolean }) => {
  return (
    <div className={styles.mpzitems}>
      {/* Item 1 */}
      <Link href={"/"} className={styles.mpzitem}>
        <div className={styles.mpztextcontainer}>
          <span className={`${styles.mpzcategory} ${styles.mpztech}`}>
            Tech
          </span>
          <h3 className={styles.mpzposttitle}>
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </h3>
          <div className={styles.mpzdetail}>
            <span className={styles.mpzusername}>John Doe -&nbsp;</span>
            <span className={styles.mpzdate}>06.12.1986</span>
          </div>
        </div>
      </Link>

      {/* Item 2 */}
      <Link href={"/"} className={styles.mpzitem}>
        <div className={styles.mpztextcontainer}>
          <span className={`${styles.mpzcategory} ${styles.mpztech}`}>
            New Tech
          </span>
          <h3 className={styles.mpzposttitle}>
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </h3>
          <div className={styles.mpzdetail}>
            <span className={styles.mpzusername}>John Doe -&nbsp;</span>
            <span className={styles.mpzdate}>06.12.1986</span>
          </div>
        </div>
      </Link>

      {/* Item 3 */}
      <Link href={"/"} className={styles.mpzitem}>
        <div className={styles.mpztextcontainer}>
          <span className={`${styles.mpzcategory} ${styles.mpztrends}`}>
            Trends
          </span>
          <h3 className={styles.mpzposttitle}>
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </h3>
          <div className={styles.mpzdetail}>
            <span className={styles.mpzusername}>John Doe -&nbsp;</span>
            <span className={styles.mpzdate}>06.12.1986</span>
          </div>
        </div>
      </Link>

      {/* Item 4 */}
      <Link href={"/"} className={styles.mpzitem}>
        <div className={styles.mpztextcontainer}>
          <span className={`${styles.mpzcategory} ${styles.mpztechno}`}>
            Apps
          </span>
          <h3 className={styles.mpzposttitle}>
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </h3>
          <div className={styles.mpzdetail}>
            <span className={styles.mpzusername}>John Doe -&nbsp;</span>
            <span className={styles.mpzdate}>06.12.1986</span>
          </div>
        </div>
      </Link>

      {/* Item 5 */}
      <Link href={"/"} className={styles.mpzitem}>
        {withImage && (
          <div className={styles.mpzimagecontainer}>
            <Image
              src="/AI-NEWS-ARTICLES-BEHOLA.png"
              alt="Behola Logo"
              width={192}
              height={36}
              className={styles.mpzimage}
            />
          </div>
        )}
        <div className={styles.mpztextcontainer}>
          <span className={`${styles.mpzcategory} ${styles.mpztech}`}>
            Tech
          </span>
          <h3 className={styles.mpzposttitle}>
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </h3>
          <div className={styles.mpzdetail}>
            <span className={styles.mpzusername}>John Doe -&nbsp;</span>
            <span className={styles.mpzdate}>06.12.1986</span>
          </div>
        </div>
      </Link>
      {/* Item 6 */}
      <Link href={"/"} className={styles.mpzitem}>
        {withImage && (
          <div className={styles.mpzimagecontainer}>
            <Image
              src="/AI-NEWS-ARTICLES-BEHOLA.png"
              alt="Behola Logo"
              width={192}
              height={36}
              className={styles.mpzimage}
            />
          </div>
        )}
        <div className={styles.mpztextcontainer}>
          <span className={`${styles.mpzcategory} ${styles.mpztech}`}>
            New Tech
          </span>
          <h3 className={styles.mpzposttitle}>
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </h3>
          <div className={styles.mpzdetail}>
            <span className={styles.mpzusername}>John Doe -&nbsp;</span>
            <span className={styles.mpzdate}>06.12.1986</span>
          </div>
        </div>
      </Link>
      {/* Item 7 */}
      <Link href={"/"} className={styles.mpzitem}>
        {withImage && (
          <div className={styles.mpzimagecontainer}>
            <Image
              src="/AI-NEWS-ARTICLES-BEHOLA.png"
              alt="Behola Logo"
              width={192}
              height={36}
              className={styles.mpzimage}
            />
          </div>
        )}
        <div className={styles.mpztextcontainer}>
          <span className={`${styles.mpzcategory} ${styles.mpztrends}`}>
            Trends
          </span>
          <h3 className={styles.mpzposttitle}>
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </h3>
          <div className={styles.mpzdetail}>
            <span className={styles.mpzusername}>John Doe -&nbsp;</span>
            <span className={styles.mpzdate}>06.12.1986</span>
          </div>
        </div>
      </Link>
      {/* Item 8 */}
      <Link href={"/"} className={styles.mpzitem}>
        {withImage && (
          <div className={styles.mpzimagecontainer}>
            <Image
              src="/AI-NEWS-ARTICLES-BEHOLA.png"
              alt="Behola Logo"
              width={192}
              height={36}
              className={styles.mpzimage}
            />
          </div>
        )}
        <div className={styles.mpztextcontainer}>
          <span className={`${styles.mpzcategory} ${styles.mpztechno}`}>
            Apps
          </span>
          <h3 className={styles.mpzposttitle}>
            Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
          </h3>
          <div className={styles.mpzdetail}>
            <span className={styles.mpzusername}>John Doe -&nbsp;</span>
            <span className={styles.mpzdate}>06.12.1986</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
