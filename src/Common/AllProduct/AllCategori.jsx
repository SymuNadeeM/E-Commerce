import React from "react";

const AllCategori = ({ filteritem }) => {
  return (
    <>
      <div className="allcategory">
        <h1>Categories</h1>

        <div className="box">
          <button onClick={() => filteritem("all")}>All</button>
        </div>
        <div className="box">
          <button onClick={() => filteritem("shoes")}>Shoes</button>
        </div>
        <div className="box">
          <button onClick={() => filteritem("mobile")}>Mobile</button>
        </div>
        <div className="box">
          <button onClick={() => filteritem("watch")}>Watch</button>
        </div>
        <div className="box">
          <button onClick={() => filteritem("earphone")}>Earphone</button>
        </div>
        <div className="box">
          <button onClick={() => filteritem("electronic")}>Electronic</button>
        </div>
        <div className="box">
          <button onClick={() => filteritem("sunglass")}>Sun Glass</button>
        </div>
        <div className="box">
          <button onClick={() => filteritem("plant")}>Plant</button>
        </div>
        <div className="box">
          <button onClick={() => filteritem("groceries")}>Groceries</button>
        </div>
      </div>
    </>
  );
};

export default AllCategori;
