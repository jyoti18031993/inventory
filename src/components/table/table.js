import React from 'react';
import Table from 'react-bootstrap/Table';

const StockTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S. No.</th>
          {/* <th>Product ID</th> */}
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {/* <td>{row.product_id}</td> */}
            <td>{row.productname}</td>
            <td>{row.quantity}</td>
            <td>{row.rate}</td>
            <td>{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StockTable;
