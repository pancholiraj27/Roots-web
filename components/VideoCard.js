import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import styles from "../styles/VideoCard.module.css";
import Link from "next/link";
const VideoCard = ({ imgSrc, vidSrc, alt, projectName, id }) => {
  return (
    <>
      <Link href={`/projects/${id}`}>
        <div className={styles.project} id={id}>
          <HoverVideoPlayer
            className={styles.hoverVideo}
            videoSrc={vidSrc}
            pausedOverlay={
              <img
                src={imgSrc}
                alt={alt}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            }
          />
          <div className={styles.h2Border}>
            <h2 className={styles.projectName}>{projectName}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
