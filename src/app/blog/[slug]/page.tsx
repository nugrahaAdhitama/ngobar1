import React from "react";
import Image from "next/image";
import styles from "./singlePost.module.css";
import { error } from "console";

const getPost = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    console.error(Error);
  }

  return res.json();
};

const BlogPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/23842679/pexels-photo-23842679/free-photo-of-a-woman-in-a-black-jacket-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="blog image"
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/23842679/pexels-photo-23842679/free-photo-of-a-woman-in-a-black-jacket-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="avatar icon"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Nugraha Adhitama</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>25.05.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default BlogPage;
