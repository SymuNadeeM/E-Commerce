import React from "react";
import "./style.css";
import CategoriesSh from "./CategoriesSh";
import { Link } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";
import ShopCart from "./ShopCart";
const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <CategoriesSh />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row ">
                <p>View all</p>
                <Link to="/allproduct">
                  <BiRightArrow className="icon_arrow" />
                </Link>
              </div>
            </div>
            <div className="product-content  grid1">
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
