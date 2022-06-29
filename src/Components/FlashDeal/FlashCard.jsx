import React, { useState } from "react";
import Slider from "react-slick";
import { AiFillHeart, AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <BsArrowRight />
      </button>
    </div>
  );
};

const PreArrow = (props) => {
  const { onClick } = props;

  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <BsArrowLeft />
      </button>
    </div>
  );
};

const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <AiFillHeart className="heart_btn" onClick={increment} />
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                  </div>
                  <div className="price">
                    <h4>$${productItems.price}.00 </h4>

                    <button onClick={() => addToCart(productItems)}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
