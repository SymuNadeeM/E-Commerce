import React from "react";
import { FaGooglePlay, FaGoogleDrive } from "react-icons/fa";

import "./Style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box foot_box">
            <h1>HaHa</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <FaGooglePlay className="G-play" />
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <FaGoogleDrive className="G-play" />
                <span>Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>How to Buy </li>
              <li>Help Center </li>

              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>32/4, north circular road dhanmondi,Dhaka. Bangladesh</li>
              <li>Email: msymunnadeem@gmail.com</li>
              <li>Mobile: +88 01625 803114 </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
