import React from "react";
import products from "../constants/product";  // Make sure the file path is correct
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/admin/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;

