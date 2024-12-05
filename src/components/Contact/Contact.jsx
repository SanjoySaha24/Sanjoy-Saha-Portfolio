import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Mail className={styles.icon} />
          <a href="mailto:sanjoysaha0524@gmail.com">sanjoysaha0524@gmail.com</a>
        </li>
      
           <li className={styles.link}>
        <Phone className={styles.icon} />
        <a href="tel:+917430931452">+91 74309 31452</a>
      </li>
      <li className={styles.link}>
          <MapPin className={styles.icon} />
          <a href="">Kolkata, West Bengal, India</a>
          
        </li>
          {/* <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li> */}

      </ul>
    </footer>
  );
};
