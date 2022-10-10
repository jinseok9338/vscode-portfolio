import React from "react";
import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "jinseok9338.me",
    href: "https://github.com/jinseok9338",
  },
  {
    social: "email",
    link: "jinseok9338@gmail.com",
    href: "mailto:jinseok9338@gmail.com",
  },
  {
    social: "github",
    link: "jinseok9338",
    href: "https://github.com/jinseok9338",
  },
  {
    social: "linkedin",
    link: "jinseok9338",
    href: "https://www.linkedin.com/in/jinseok9338/",
  },
  {
    social: "twitter",
    link: "jinseok9338",
    href: "https://www.twitter.com/jinseok9338",
  },
  {
    social: "instagram",
    link: "jinseok9338",
    href: "https://www.instagram.com/jinseok9338",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
