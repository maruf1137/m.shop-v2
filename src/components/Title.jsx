import React from "react";

const Title = ({ bgImg, title }) => {
  return (
    <div
      className="title"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.603), rgba(0, 0, 0, 0.575)), url(${bgImg})`,
      }}
    >
      <h2 className="title__text center">{title}</h2>
    </div>
  );
};

export default Title;
