import React, { useEffect, useState } from "react";
import axios from "axios";
import StockTable from "../components/table/closingTable";

const ClosingStockTable = () => {
  const [closingStockData, setClosingStockData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/closingStock/getClosingStock");
        setClosingStockData(response.data.data);
      } catch (error) {
        console.error("Error fetching closing stock data:", error);
      }
    };
    FetchData();
  }, []); 

  return (
    <div className="table-container">
      <h1>Closing Stock Table</h1>
      <StockTable data={closingStockData} />
    </div>
  );
};

export default ClosingStockTable;
