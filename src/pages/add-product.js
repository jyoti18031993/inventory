import React, { useState } from "react";
import axios from "axios";

const AddProductForm = ({ onProductAdded }) => {
  const [productName, setProductName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/product/addProduct", {
        productName,
      });
      console.log(productName, "Product added successfully");
      setProductName("");
      onProductAdded();
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  const capitalizeFirstLetter = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.trim();
    setProductName(capitalizeFirstLetter(inputValue));
  };

  return (
    <div className="product-container">
      <h1 id="main-heading">Inventory Management System</h1>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="product-input-button">
          <input
            type="text"
            value={productName}
            onChange={handleInputChange}
            placeholder="Enter Product Name"
            className="product-input"
          />
          <button type="submit" className="add-button">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
