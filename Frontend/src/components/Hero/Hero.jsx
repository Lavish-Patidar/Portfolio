import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lavish Patidar</h1>
        <p className={styles.description}>
          I'm a fresher Full Stack Developer with a strong foundation in web development. I specialize in React.js for frontend development and have experience building responsive, user-friendly applications. I'm passionate about creating efficient solutions and eager to contribute to innovative projects.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
