import React from "react";
import styles from "../../styles/ProjectPage.module.css";
import Image from "next/image";
import VideoCard from "../../components/VideoCard";
import Link from "next/link";
import jsonData from "../../data/projectData.json";
export const getStaticProps = async () => {
  // const res = await fetch(
  //   "https://pancholiraj27.github.io/rootsData//projectData.json"
  // );
  // const data = await res.json();
  // const res = fetch(jsonData);
  // const data = res.json();

  return {
    props: { data: jsonData },
  };
};

const index = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.rootLogo}>
          <Link href={"/"}>
            <Image
              className={styles.images}
              src="https://res.cloudinary.com/pancholiraj/image/upload/v1657556140/roots/rootProjectLogo_fxdhxs.png"
              alt="roots logo"
              width={150}
              height={150}
            />
          </Link>
          <p>
            Spaces are designed to give a personal touch that speaks more about
            the users personality
          </p>
        </section>
        <section className={styles.projectsSections}>
          {data.map((items) => {
            const { id, vidSrc, alt, imgSrc, projectName } = items;
            return (
              <VideoCard
                key={id}
                id={id}
                vidSrc={vidSrc}
                alt={alt}
                imgSrc={imgSrc}
                projectName={projectName}
              />
            );
          })}
        </section>
        <p className={styles.contact}>
          <Link href={"/contact"}>Contact</Link>
        </p>
      </div>
    </>
  );
};

export default index;
