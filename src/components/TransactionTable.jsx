import React from "react";
import Table from "react-bootstrap/Table";

const TransactionTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Expenses</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2-02-2025</td>
          <td>Salary</td>
          <td></td>
          <td>$$$</td>
        </tr>
        <tr>
          <td>2</td>
          <td>08-02-2025</td>
          <td>Shopping</td>
          <td>-$$$</td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>2-05-2024</td>
          <td>Business</td>
          <td></td>
          <td>$$$</td>
        </tr>
        <tr className="fw-bolder text-center">
          <td colSpan={3}>Total Balance</td>

          <td colSpan={2}>$$$</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TransactionTable;
