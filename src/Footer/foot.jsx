import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer-style.css";

const Footer = () => {
  return (
    <div class="d-flex flex-column h-100">
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white">EthQF</h5>
              <p class="small text-muted">
                EthQF is a platform where you get paid to work on open source
                software in Python, Rust, Ruby, JavaScript, Solidity, HTML, CSS,
                Design, and more.
              </p>
              <p class="small text-muted mb-0">
                &copy; Copyrights. 2021. All rights reserved.{" "}
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Product</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <a href="#">Issue Explorer</a>
                </li>
                <li>
                  <a href="#">Kudos</a>
                </li>
                <li>
                  <a href="#">Grants</a>
                </li>
                <li>
                  <a href="#">Quests</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Organization</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Results</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Community</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <a href="#">Code Of Conduct</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Store</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3 text-center">Catch Us On</h5>
              <div className="social-container my-3">
                <a href="https://www.youtube.com/" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
