import React, { useEffect, useState } from "react";
import axios from "axios";
import StockTable from "../components/table/table";

const PurchaseStock = () => {
  const [purchaseData, setPurchaseData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/purchase/getPurchases");
        console.log(response.data.data)
        setPurchaseData(response.data.data);
      } catch (error) {
        console.error("Error fetching purchase stock data:", error);
      }
    };
    FetchData();
  }, []); 

  return (
    <div className="table-container">
      <h1>Purchse Stock Table</h1>
      <StockTable data={purchaseData} />
    </div>
  );
};

export default PurchaseStock;
