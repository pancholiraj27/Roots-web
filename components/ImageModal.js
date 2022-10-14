import React from "react";
import styles from "../styles/ImageModal.module.css";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineClose,
} from "react-icons/ai";
const ImageModal = ({
  clickedImage,
  setClickedImage,
  onRightClick,
  onLeftClick,
}) => {
  const handelClick = (e) => {
    // if (e.target.classList.contains("dismiss")) {
    setClickedImage(null);
    // }
  };
  return (
    <>
      <div className={styles.imageModal}>
        <span className={styles.arrow} onClick={onLeftClick}>
          <AiOutlineArrowLeft />
        </span>
        <img className={styles.images} src={clickedImage} alt="" />
        <span className={styles.arrow} onClick={onRightClick}>
          <AiOutlineArrowRight />
        </span>
      </div>
      <div className={styles.dismiss} onClick={handelClick}>
        <AiOutlineClose />
      </div>
    </>
  );
};

export default ImageModal;
