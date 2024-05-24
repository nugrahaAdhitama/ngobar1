import React from "react";
import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact TWD",
  description: "Contact TWD",
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={10}
            rows={10}
            placeholder="Leave your message here..."
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
