import React from "react";
import "../../styles/avatarStyle.scss";
function Avatar({ imgURL }) {
  return (
    <div className="avatar">
      <img src={imgURL} alt="Avatar of self" />
      <h2>Nicholas Harding</h2>
      <h4>Fullstack, Game and Software Developer</h4>
    </div>
  );
}

export default Avatar;
