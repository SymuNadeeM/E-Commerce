import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = ({ cartItem }) => {
  //header fixed

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <Link to="/">
              <h1>HaHa</h1>
            </Link>
          </div>
          <div className="search-box f_flex">
            <AiOutlineSearch className="search_icon" />
            <input type="text" placeholder="Search here.." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <Link to="/login">
              <FaUserAlt className="to_icon" />
            </Link>
            <div className="cart">
              <Link to="/cart">
                <FaShoppingCart className="to_icon" />
                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
