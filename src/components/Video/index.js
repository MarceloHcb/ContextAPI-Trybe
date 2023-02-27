import React from "react";

function Video({background, id, title, handleBackground}) {
  return (
    <>
    <h2>{title}</h2>
    <video autoPlay="autoPlay" muted loop id={id} value={background} onClick={handleBackground}>
      <source src={background} type="video/mp4" />
    </video>
    </>
  );
}

export default Video;
