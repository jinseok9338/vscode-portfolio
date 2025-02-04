import Link from "next/link";
import React from "react";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage({ isUserKorean }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>SOMETHING</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Jinseok Seo</h1>
            <h6 className={styles.bio}>{`${
              isUserKorean ? "풀스택 웹 개발자" : "Full Stack Web Developer"
            }`}</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const userlanguages =
    typeof navigator === "undefined"
      ? req?.headers["accept-language"]?.split(",")
      : ["en"];

  const isUserKorean = userlanguages?.includes("ko-KR") ? true : false;
  return {
    props: { title: "Home", isUserKorean },
  };
}
