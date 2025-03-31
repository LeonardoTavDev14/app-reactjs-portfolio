import React from "react";

const YoutubePlayer = ({ videoId }) => {
  return (
    <>
      <div>
        <iframe
          width="500"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: "15px", boxShadow: "0 3px 9px #000" }}
        ></iframe>
      </div>
    </>
  );
};

export default YoutubePlayer;
