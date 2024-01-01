import React from "react";
import styles from "@/styles/infostyles.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const InfoFeatured = () => {
  return (
    <div>
      <div className={styles.infofeaturedcontainer}>
        <h1 className={styles.title}>
          <b>
            | &nbsp;
            <u>Crafting Brilliance</u>
          </b>
          &nbsp; | &nbsp; Your Gateway to Behola's AI Blogosphere
        </h1>
        <div className={styles.post}>
          <div className={styles.imgcontainer}>
            <Image
              src="/AI-NEWS-ARTICLES-BEHOLA.png"
              alt="Behola Blogs"
              layout="fill"
              className={styles.image}
            />
          </div>
          <div className={styles.textcontainer}>
            <h1 className={styles.posttitle}>
              <b>The AI Renaissance: Behola's Blogosphere Revolution</b>
            </h1>
            <p className={styles.postdesc}>
              Embark on a journey through Behola's blog section, where
              artificial intelligence meets creativity. Immerse yourself in a
              realm of unparalleled content brilliance, exploring the latest
              trends, insights, and innovations reshaping the future of
              blogging. Welcome to the AI renaissance, where every click unveils
              a new chapter in the evolution of content creation. Join us as we
              redefine blogging through the lens of cutting-edge technology,
              sparking inspiration and transforming ideas into captivating
              narratives. Dive into our curated collection of AI-driven
              articles, tutorials, and thought-provoking pieces, designed to
              ignite your curiosity and elevate your blogging experience.
            </p>
            <button className={styles.buttonz}>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoFeatured;
