import React, { useState } from "react";
import { FaBorderAll, FaRegWindowClose } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span>
              <FaBorderAll />
            </span>
            <h4>
              Categories <BiChevronDown className="down" />
            </h4>
          </div>
          <div className="navlink">
            <ul
              className={
                mobileMenu ? "nav-link-mobileMenu" : "link f_flex capitalize"
              }
              // onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">User Account</Link>
              </li>
              <li>
                <Link to="/allproduct">All Product</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <FaRegWindowClose className="close" />
              ) : (
                <GoThreeBars className="open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
