import React, { useState } from "react";
import jsonData from "../../data/projectData.json";
import styles from "../../styles/dynamicPages.module.css";
import Link from "next/link";
// import Gallery from "react-grid-gallery";
import ImageModal from "../../components/ImageModal";
export const getStaticPaths = async () => {
  const paths = jsonData.map((items) => {
    return {
      params: { id: items.id },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = jsonData.filter((p) => p.id === context.params.id);
  return {
    props: { data: id[0] },
  };
};

// ReactGridGallery_tile-icon-bar

const Projects = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(undefined);
  const [clickedImage, setClickedImage] = useState(undefined);
  const { projectName, images } = data;

  const handelClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.src);
  };

  const onRightClick = () => {
    console.log("right");
    const totalLength = images.length - 1;

    console.log(clickedImage);
    if (totalLength <= currentIndex) {
      setCurrentIndex(0);
      setClickedImage(images[0].src);
    } else {
      setCurrentIndex(currentIndex + 1);
      setClickedImage(images[currentIndex + 1].src);
    }
    // }
  };

  const onLeftClick = () => {
    console.log("left");
    const totalLength = images.length - 1;
    if (currentIndex <= 0) {
      setCurrentIndex(totalLength);
      setClickedImage(images[totalLength].src);
      console.log(images[totalLength], "back");
    } else {
      console.log(currentIndex, "current ");
      setCurrentIndex(currentIndex - 1);
      setClickedImage(images[currentIndex - 1].src);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>{projectName}</h1>
        {/* <div className={styles.responsive}>
          <Gallery
            enableImageSelection={false}
            backdropClosesModal={true}
            images={images}
            margin={10}
          />
        </div> */}
        <div className={styles.wrapperImage}>
          {images.map((item, index) => {
            return (
              <img
                key={index}
                src={item.src}
                onClick={() => handelClick(item, index)}
              />
            );
          })}
        </div>
        {clickedImage && (
          <ImageModal
            clickedImage={clickedImage}
            setClickedImage={setClickedImage}
            onRightClick={onRightClick}
            onLeftClick={onLeftClick}
          />
        )}
        <div className={styles.backButton}>
          <Link href={"/projects"}>Back to Projects</Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
