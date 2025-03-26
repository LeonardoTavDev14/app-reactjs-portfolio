import { useState } from "react";
import styles from "../css/VideoPlayer.module.css";

const VideoPlayer = ({ videoSrc, thumbnailSrc, title }) => {
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const handlePlay = () => {
    setVideoIsPlaying(true);
  };

  const handlePause = () => {
    setVideoIsPlaying(false);
  };

  return (
    <div className={styles.videoContainer}>
      <h2>{title}</h2>

      <div className={styles.videoWrapper}>
        {!videoIsPlaying && (
          <div className={styles.thumbnail} onClick={handlePlay}>
            <img src={thumbnailSrc} alt="thumbnail" />
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
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
