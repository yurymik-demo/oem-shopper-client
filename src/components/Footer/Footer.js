import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">OEM Store</h5>
            <p className="grey-text text-lighten-4">
              To learn more about who we are click on these links:
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">More About Us:</h5>
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  About
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Investors
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2018 Copyright Text
          <Link className="grey-text text-lighten-4 right" to="#!">
            More Links
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
