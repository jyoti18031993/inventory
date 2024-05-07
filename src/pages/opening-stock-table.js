import React, { useEffect, useState } from "react";
import axios from "axios";
import StockTable from "../components/table/table";

const OpeningStock = () => {
  const [openingStockData, setOpeningStockData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/openingStock/getOpeningStock");
        setOpeningStockData(response.data.data);
      } catch (error) {
        console.error("Error fetching opening stock data:", error);
      }
    };
    FetchData();
  }, []); 

  return (
    <div className="table-container">
      <h1>Closing Stock Table</h1>
      <StockTable data={openingStockData} />
    </div>
  );
};

export default OpeningStock;
