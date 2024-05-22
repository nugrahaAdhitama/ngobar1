import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>TWD</div>
      <div className={styles.text}>
        TWD Createive thoughts agency &copy; All rights reserved.
      </div>
    </div>
  );
}
