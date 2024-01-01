import styles from "@/styles/infostyles.module.css";
import Image from "next/image";
import Link from "next/link";
const InfoCard = () => {
  return (
    <>
      <div className={styles.infocardcontainer}>
        <div className={styles.cardimgcontainer}>
          <Image
            src="/AI-NEWS-ARTICLES-BEHOLA.png"
            alt="Post 1"
            className="styles.cimage"
            width={700}
            height={400}
          />
        </div>
        <div className={styles.cardtextcontainer}>
          <div className={styles.carddetails}>
            <span className={styles.carddate}>06.12.1986 -&nbsp;</span>
            <span className={styles.cardcategory}>Tech</span>
          </div>
          <Link href="/" className={styles.cardlink}>
            <h1 className={styles.cardtitle}>
              Loreuum Ipsuum Loreuum Ipsuum Loreuum Ipsuum Loreuum Ipsuum
            </h1>
          </Link>
          <p className={styles.carddesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/" className={styles.cardlink}>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
