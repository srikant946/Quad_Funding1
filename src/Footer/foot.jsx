import React from "react";
import "./footer-style.css";

const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Hello</h4>
            <ul className="list-unstyled">
              <li>3000 --00 </li>
              <li>Ok</li>
              <li>Hi</li>
            </ul>
          </div>
          <div className="col">
            <h4>Hello</h4>
            <ul className="list-unstyled">
              <li>3000 --00 </li>
              <li>Ok</li>
              <li>Hi</li>
            </ul>
          </div>
          <div className="col">
            <h4>Hello</h4>
            <ul className="list-unstyled">
              <li>3000 --00 </li>
              <li>Ok</li>
              <li>Hi</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ABC | All Rights Reserved | Ok.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
