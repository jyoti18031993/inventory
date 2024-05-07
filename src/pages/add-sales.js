import React, { useState } from "react";
import axios from "axios";
import ErrorModal from "./errorPopup";

const AddSalesForm = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false); 

  const handleCloseModal = () => {
    setShowModal(false); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/sales/productSale", {
        productName,
        quantity,
        rate,
      });
      setProductName("");
      setQuantity("");
      setRate("");
      setErrorMessage("");
      console.log(productName, quantity, rate, " sales added successfully");
    } catch (error) {
      console.error("Error adding sales:", error.message);
      if (error.response && error.response.data && error.response.data.messages) {
        setErrorMessage(error.response.data.messages);
      } else {
        setErrorMessage("Failed to add purchase. Please try again.");
      }
      setShowModal(true);
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
      <h1>Add Sales</h1>
      <ErrorModal show={showModal} onClose={handleCloseModal} message={errorMessage} />
      <form onSubmit={handleSubmit}>
        <div className="product-input-button">
          <input
            className="product-input"
            type="text"
            value={productName}
            onChange={handleInputChange}
            placeholder="Product Name"
          />
          <input
            className="product-input"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
          />
          <input
            className="product-input"
            type="text"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="rate"
          />
          <button type="submit" className="add-button">
            Add Sales
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSalesForm;
