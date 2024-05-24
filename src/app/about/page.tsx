import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About TWD",
  description: "Learn more about TWD",
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About TWD</h2>
        <h1 className={styles.title}>
          We create digital products that help businesses grow.
        </h1>
        <p className={styles.desc}>
          We are a team of designers, developers, and product managers who are
          passionate about creating digital products that help businesses grow.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>300+</h1>
            <p>Happy Clients</p>
          </div>
          <div className={styles.box}>
            <h1>150+</h1>
            <p>Digital Products</p>
          </div>
          <div className={styles.box}>
            <h1>100+</h1>
            <p>Helpful Applications</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About TWD" fill className={styles.img} />
      </div>
    </div>
  );
}
