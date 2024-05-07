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
          <th>Product Name</th>
          <th>opening Quantity</th>
          <th>purchase Quantity</th>
          <th>sales Quantity</th>
          <th>closing Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.productname}</td>
            <td>{row.opening_quantity}</td>
            <td>{row.purchase_quantity}</td>
            <td>{row.sales_quantity}</td>
            <td>{row.closing_quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StockTable;
