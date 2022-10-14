import { useState } from "react";
import Link from "next/link";
import styles from "../styles/LandingPage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Home() {
  const [toggleOn, setToggleOn] = useState(false);
  return (
    <>
      <div className={styles.landingPage} onClick={() => setToggleOn(false)}>
        <video
          className={styles.video}
          // src={"/videoBg.mp4"}
          src="https://res.cloudinary.com/pancholiraj/video/upload/v1657475386/roots/landing_page_video_jiqsvf.mp4"
          autoPlay
          loop
          muted
        />

        {/* not want this section */}
        {/* <section className={styles.landingData}>
          <h1>Movement graphic or video with music</h1>
        </section> */}

        {/* full screen */}
        <Link href="/projects">
          <div className={styles.projectButton}>Projects</div>
        </Link>
        {/* on mobile  */}
      </div>

      <div className={styles.toggleButton}>
        <div onClick={() => setToggleOn(!toggleOn)}>
          <GiHamburgerMenu />
        </div>
      </div>
      {/* toggle links */}
      {toggleOn ? (
        <div className={styles.toggleLinks}>
          <ul>
            <Link href={"/projects"}>
              <li>Projects</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      ) : null}
    </>
  );
}
