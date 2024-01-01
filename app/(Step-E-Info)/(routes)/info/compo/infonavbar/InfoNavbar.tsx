import React from "react";
import styles from "@/styles/infostyles.module.css";
import Image from "next/image";
import Link from "next/link";
import InfoMobileNavbar from "@/app/(Step-E-Info)/(routes)/info/compo/infonavbar/InfoMobileNavbar";

const InfoNavbar = () => {
  return (
    <>
      <div className="mb-4">
        <div className={styles.infonavbarcontainer}>
          <div className={styles.logo}>
            <Image
              src="/behola.png"
              alt="Behola Logo"
              width={192}
              height={36}
            />
          </div>
          <div className={styles.links}>
            <Link className={styles.link} href={"/"}>
              Home
            </Link>
            <Link className={styles.link} href={"/info"}>
              Info
            </Link>
            <Link className={styles.link} href={"/about"}>
              About
            </Link>
            <Link className={styles.link} href={"/contact"}>
              Contact
            </Link>
            <div>
              <InfoMobileNavbar />
            </div>
          </div>
          <div className={styles.social}>
            <Image
              src="/facebook.png"
              alt="Facebook Behola"
              width={24}
              height={24}
            />
            <Image
              src="/instagram.png"
              alt="Instagram Behola"
              width={24}
              height={24}
            />
            <Image
              src="/twitterx.png"
              alt="Twitter / X Behola"
              width={24}
              height={24}
            />
            <Image
              src="/linkedin.png"
              alt="LinkedIn Behola"
              width={24}
              height={24}
            />
            <Image
              src="/youtube.png"
              alt="Youtube Behola"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoNavbar;
