import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sanjoy</h1>
        <div className={styles.contactLinks}>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            <Linkedin className={styles.icon} /> LinkedIn
          </a>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            <Github className={styles.icon} /> GitHub
          </a>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            <FileText className={styles.icon} /> Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};