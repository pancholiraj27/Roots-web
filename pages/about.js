import Link from "next/link";
import React from "react";
import styles from "../styles/AboutPage.module.css";
const about = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutDetails}>
        <div className={styles.imageDiv}>
          <img
            className={styles.anshuImage}
            src="./aboutImage.webp"
            alt="Anshu Bhansali Image"
          />
        </div>
        <div className={styles.anshuAbout}>
          <h1>About</h1>
          <p>
            Born and raised in Rajasthan, Anshu has called Jaisalmer home for
            25+ years. She acquired her love of classical beauty from her
            upbringing, traveling across and those roots still speak to her soul
            today. She believes living well involves comfort, elegance, and a
            touch of whimsical and she interjects this in her wide spectrum of
            projects.
          </p>
          <p>
            The studio is known for its creative, original work characterized by
            personalized attention to detail and longevity. She takes a fully
            immersive approach to designing all aspects of interior architecture
            and loose furnishings and draws inspiration from myriad sources both
            past and present.
          </p>
        </div>
      </div>
      <div className={styles.pagesLink}>
        <ul>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>

          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default about;
