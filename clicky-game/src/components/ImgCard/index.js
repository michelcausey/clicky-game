import React from "react";
import "./style.css";

function ImgCard(props) {
  return (
    <div className="content">
    <div className="card">
      <div className="img-container">
        <img className="img-size" alt={props.name} src={props.image} />
      </div>
      </div>
    </div>
  );
}

export default ImgCard;