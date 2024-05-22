"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Homepage",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.name} />
        ))}
        {session ? (
          <>{isAdmin && <NavLink item={{ name: "Admin", path: "/admin" }} />}</>
        ) : (
          <NavLink item={{ name: "login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
