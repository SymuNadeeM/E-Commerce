import React, { useState } from "react";
import { AiFillHeart, AiFillStar, AiOutlinePlus } from "react-icons/ai";

const Product = ({ AllproductItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      {AllproductItems.map((allprod, ind) => {
        return (
          <div className="box">
            <div className="allproduct mtop">
              <div className="img">
                <span className="discount">{allprod.discount}% Off</span>
                <img src={allprod.cover} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <AiFillHeart onClick={increment} className="heart_btn" />
                </div>
              </div>
              <div className="product-details">
                <h3>{allprod.name}</h3>
                <div className="rate">
                  <AiFillStar className="star" />
                  <AiFillStar className="star" />
                  <AiFillStar className="star" />
                  <AiFillStar className="star" />
                  <AiFillStar className="star" />
                </div>
                <div className="price">
                  <h4>${allprod.price}.00 </h4>

                  <button onClick={() => addToCart(allprod)}>
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
