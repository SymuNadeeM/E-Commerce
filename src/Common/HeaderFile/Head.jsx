import React from "react";
import { GiEnvelope } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <BsFillTelephoneFill />
            <label> +8801 6258 03114</label>
            <GiEnvelope />
            <label> msymunnadeem@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>☪️</span>
            <label>EN</label>
            <span>☪️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
