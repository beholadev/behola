import React from "react";
import styles from "@/styles/infostyles.module.css";
import Link from "next/link";
import Image from "next/image";

const InfoFooter = () => {
  return (
    <div className={styles.xxxinfofootercontainer}>
      <div className={styles.xxxinfo}>
        <div className={styles.xxxlogo}>
          <Image
            src="/behola.png"
            alt="Behola Services"
            width={150}
            height={75}
          />
          <h1 className={styles.xxxlogoText}>Behola Services</h1>
        </div>
        <p className={styles.xxxdesc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.xxxicons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/twitterx.png" alt="" width={18} height={18} />
          <Image src="/linkedin.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.xxxlinks}>
        <div className={styles.xxxlist}>
          <span className={styles.xxxlistTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.xxxlist}>
          <span className={styles.xxxlistTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.xxxlist}>
          <span className={styles.xxxlistTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default InfoFooter;
