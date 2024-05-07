import React, { useEffect, useState } from "react";
import axios from "axios";
import StockTable from "../components/table/table";

const SalesStock = () => {
  const [salesData, setsalesData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/sales/getSales");
        console.log(response.data.data)
        setsalesData(response.data.data);
      } catch (error) {
        console.error("Error fetching sales stock data:", error);
      }
    };
    FetchData();
  }, []); 

  return (
    <div className="table-container">
      <h1>Sales Stock Table</h1>
      <StockTable data={salesData} />
    </div>
  );
};

export default SalesStock;
