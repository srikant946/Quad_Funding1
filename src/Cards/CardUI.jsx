import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import "./card-style.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary max-line">{props.content}</p>
        <hr />
        <p className="fw-bold pr">$30,000</p>
        <p className="pr">total raised</p>
        <br />
        <button className="btn btn-danger btn-md mx-2">
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </button>
        <button className=" col-sm-8 btn btn-primary btn-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
