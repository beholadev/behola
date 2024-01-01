import styles from "@/styles/infostyles.module.css";
import InfoMenu from "../compo/infomenu/InfoMenu";
import Image from "next/image";
import Comments from "../compo/comments/Comments";
const singlePage = () => {
  return (
    <div>
      <div className={styles.spginfoContainer}>
        <div className={styles.spgtextContainer}>
          <h1 className={styles.spgtitle}>
            Welcome to the AI renaissance, where every click
          </h1>
          <div className={styles.spguser}>
            <div className={styles.spguserImageContainer}>
              <Image
                src="/behola.png"
                alt="User Logo"
                fill
                className={styles.spgavatar}
              />
            </div>
            <div className={styles.spguserTextContainer}>
              <span className={styles.spgusername}>John Doe</span>
              <span className={styles.spgdate}>06.12.1986</span>
            </div>
          </div>
        </div>
        <div className={styles.spgimageContainer}>
          <Image
            src="/AI-NEWS-ARTICLES-BEHOLA.png"
            alt="Blog Image"
            fill
            className={styles.spgimage}
          />
        </div>
      </div>
      <div className={styles.spgcontent}>
        <div className={styles.spgpost}>
          <div className={styles.spgdescription}>
            <p>
              Embark on a journey through Behola's blog section, where
              artificial intelligence meets creativity. Immerse yourself in a
              realm of unparalleled content brilliance, exploring the latest
              trends, insights, and innovations reshaping the future of
              blogging. Welcome to the AI renaissance, where every click unveils
              a new chapter in the evolution of content creation.
            </p>
            <h2>Welcome to the AI renaissance, where every click</h2>
            <p>
              Embark on a journey through Behola's blog section, where
              artificial intelligence meets creativity. Immerse yourself in a
              realm of unparalleled content brilliance, exploring the latest
              trends, insights, and innovations reshaping the future of
              blogging. Welcome to the AI renaissance, where every click unveils
              a new chapter in the evolution of content creation.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <InfoMenu />
      </div>
    </div>
  );
};

export default singlePage;
