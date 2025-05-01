// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import products from "../constants/product";

const Home = () => {
  return (
    <div>
      {products.map((item) => (
        <Link key={item.id} to={`/products/${item.id}`}>
          <div>
            {item.name} <button className="btn">Buy</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
// Ensure this export is correct
