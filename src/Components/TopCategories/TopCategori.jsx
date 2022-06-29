import React from "react";
import TopCart from "./TopCart";
import { BiCategory } from "react-icons/bi";

import "./Style.css";

const TopCategori = () => {
  return (
    <>
      <section className="TopCate background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <BiCategory className="hole_button" />
              <h2>Top Categories</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCategori;
