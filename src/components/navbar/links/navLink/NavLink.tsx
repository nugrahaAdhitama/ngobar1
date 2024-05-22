"use client";

import React from "react";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item?.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.name}
    </Link>
  );
};

export default NavLink;
