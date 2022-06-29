import React from "react";
import pic2 from "./img/Samsung-.jpg";
import pic1 from "./img/227-2278020_q9-smartwatch.jpg";

const Accument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className="annocument background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img src={pic1} alt="" width="100%" height="100%" />
          </div>
          <div className="img" style={mystyle1}>
            <img src={pic2} alt="" width="100%" height="100%" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Accument;
