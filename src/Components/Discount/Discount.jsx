import React from "react";
import { TbDiscount } from "react-icons/tb";
import {BiRightArrow} from "react-icons/bi"
import DisCard from "./DisCard";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <TbDiscount className="hole_button" />
              <h2>Big Discounts</h2>
            </div>
            <div className="heading-right row ">
            <p>View all</p>
              <Link to="/allproduct">
                <BiRightArrow className="icon_arrow" />
              </Link>
            </div>
          </div>
          <DisCard />
        </div>
      </section>
    </>
  );
};

export default Discount;
