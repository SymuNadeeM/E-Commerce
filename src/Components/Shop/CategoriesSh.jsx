import React from "react";
import shc1 from "../../images/ShopCateg/original-samsung-logo-10.png";
import shc0 from "../../images/ShopCateg/apple.png";
import oppo from "../../images/ShopCateg/oppo.png";
import vivo from "../../images/ShopCateg/vivo.png";
import redmi from "../../images/ShopCateg/xiaomi-.png";
import sony from "../../images/ShopCateg/5848242ecef1014c0b5e49c8.png.crdownload";
const CategoriesSh = () => {
  const data = [
    {
      cateImg: shc0,
      cateName: "Apple",
    },
    {
      cateImg: shc1,
      cateName: "Samasung",
    },
    {
      cateImg: oppo,
      cateName: "Oppo",
    },
    {
      cateImg: vivo,
      cateName: "Vivo",
    },
    {
      cateImg: redmi,
      cateName: "Redimi",
    },
    {
      cateImg: sony,
      cateName: "Sony",
    },
  ];

  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default CategoriesSh;
