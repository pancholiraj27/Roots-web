import React from "react";
import Link from "next/link";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import contactImage from "../public/contact.png";
const contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.quote}>
          <h1>
            “My greatest strength as a Designer is to be ignorant and ask a few
            questions.”
          </h1>
          <span className={styles.writer}>-Peter Drucker</span>
          <h2>Filling lives with design experiences...</h2>
        </div>
        <footer className={styles.footer}>
          <div className={styles.contacts}>
            <img src={"./contact.png"} className={styles.image} />
            <div className={styles.contactsDetails}>
              <h3 className={styles.highlight}>
                Get in touch we would love to hear from you.
              </h3>
              <ul>
                {/* &nbsp;  create empty space */}
                <li>
                  <h3>
                    E-mail:
                    <a
                      className={styles.link}
                      href={"mailto: anshu.bhansali.ab@gmail.com"}
                    >
                      &nbsp; anshu.bhansali.ab@gmail.com
                    </a>
                  </h3>
                </li>
                <li>
                  <h3>
                    Contact number:
                    <a className={styles.link} href="tel:+91 9783436501">
                      &nbsp; +91-9783436501
                    </a>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className={styles.address}>
            <video
              className={styles.globeVideo}
              autoPlay
              loop
              muted
              alt="video error"
              src={"/globe.mp4"}
            />
            <div className={styles.addressDetails}>
              <h3 className={styles.highlight}>Moving Studio</h3>
              <p>
                Bangalore, Udaipur, Jodhpur, Jaisalmer, and where you call us...
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default contact;
