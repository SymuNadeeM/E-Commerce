import React from "react";
import Product from "./Product";
import AllCategori from "./AllCategori";
import "./style.css";

const AllProduct = ({ menuItem, addToCart, filteritem }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <AllCategori filteritem={filteritem} />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>All Product</h2>
              </div>
            </div>
            <div className="product-content  grid1">
              <Product AllproductItems={menuItem} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
