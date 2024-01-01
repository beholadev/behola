import styles from "@/styles/infostyles.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.comcontainer}>
      <h1 className={styles.comtitle}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.comwrite}>
          <textarea
            placeholder="write a comment..."
            className={styles.cominput}
          />
          <button className={styles.combutton}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment!</Link>
      )}
      <div className={styles.comcomments}>
        <div className={styles.comcomment}>
          <div className={styles.comuser}>
            <Image
              src="/aiinnovations.png"
              className={styles.comimage}
              alt="User Logo"
              width={50}
              height={50}
            />
            <div className={styles.comuserInfo}>
              <span className={styles.comusername}>John Doe</span>
              <span className={styles.comdate}>06.12.1986</span>
            </div>
          </div>
          <p className={styles.comdesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
