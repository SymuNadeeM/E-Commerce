import React from "react";
import data from "./Cdata";

const Categories = () => {
  return (
    <>
      <div className="category">
        {data.map((curdata, index) => {
          return (
            <div className="box" key={index}>
              <img src={curdata.cateImg} alt="" />
              <span>{curdata.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
