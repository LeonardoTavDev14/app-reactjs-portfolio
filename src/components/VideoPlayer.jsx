import { useState } from "react";
import styles from "../css/VideoPlayer.module.css";

const VideoPlayer = ({ videoSrc, thumbnailSrc }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const handlePlay = () => {
    setVideoIsPlaying(true);
  };

  const handlePause = () => {
    setVideoIsPlaying(false);
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        {!videoIsPlaying && (
          <div className={styles.thumbnail} onClick={handlePlay}>
            <img src={thumbnailSrc} alt="Thumbnail video" />
          </div>
        )}

        <video
          className={styles.video}
          src={videoSrc}
          controls
          autoPlay={videoIsPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          poster={thumbnailSrc}
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
