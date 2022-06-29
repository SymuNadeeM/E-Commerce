import React from "react";
import NewCart from "./NewCart";
import "./Style.css";
import { MdOutlineWbSunny } from "react-icons/md";

const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <MdOutlineWbSunny className="hole_button" />
              <h2>New Arrivals </h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
            </div>
          </div>

          <NewCart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
