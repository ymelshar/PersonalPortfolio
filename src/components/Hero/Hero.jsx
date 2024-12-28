import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yassin!</h1>
        <p className={styles.description}>
        I’m a senior Computer Science student at Syracuse University with a passion for programming. 
        From creating dynamic web applications to solving complex machine learning challenges, 
        I’m eager to bring my technical skills and creative thinking to impactful projects.
        </p>
        <a href="mailto:yelsharafi0811@email.com" className={styles.contactBtn}>
          Contact Me!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="My Photo"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};