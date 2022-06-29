import React from "react";
import Accument from "../Components/Accument/Accument";
import Discount from "../Components/Discount/Discount";
import FlashDeal from "../Components/FlashDeal/FlashDeal";
import Home from "../Components/MainPage/Home";
import NewArrivals from "../Components/NewArrival/NewArrivals";
import Shop from "../Components/Shop/Shop";
import TopCategori from "../Components/TopCategories/TopCategori";
import Wrapper from "../Components/Wrapper/Wrapper";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeal productItems={productItems} addToCart={addToCart} />
      <TopCategori />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Accument />
      <Wrapper/>
    </>
  );
};

export default Pages;
