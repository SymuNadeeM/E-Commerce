import React from "react";
import { TbDiscount } from "react-icons/tb";
import DisCard from "./DisCard";

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
              <span>View all</span>
            </div>
          </div>
          <DisCard />
        </div>
      </section>
    </>
  );
};

export default Discount;
