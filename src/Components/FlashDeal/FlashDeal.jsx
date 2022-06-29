import React from "react";
import FlashCard from "./FlashCard";
import "./Style.css";
import { AiFillThunderbolt } from "react-icons/ai";

const FlashDeal = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex row">
            <AiFillThunderbolt className="hole_button" />
            <h2>Flash Delas</h2>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeal;
