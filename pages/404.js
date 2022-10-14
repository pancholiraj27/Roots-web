import React from "react";
import Image from "next/image";
import Link from "next/link";
import image404 from "../public/404.png";
import styles from "../styles/404.module.css";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.image404} src={image404} layout="fill" />

      <h1 className={styles.backButton}>
        <Link href={"/"}>Back to Home</Link>
      </h1>
    </div>
  );
};

export default NotFound;
