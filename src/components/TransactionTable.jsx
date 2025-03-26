import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useUser } from "./context/UserContext";
import { Button, Form } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";

const TransactionTable = () => {
  const { transactions } = useUser();

  const [displayTransactions, setDisplayTransactions] = useState([]);

  // Using useEffect to render the transactions in the table
  useEffect(() => {
    setDisplayTransactions(transactions);
  }, [transactions]);

  // Tracking the user typing
  const handleOnType = (e) => {
    const { value } = e.target;
    const filteredArr = transactions.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayTransactions(filteredArr);
  };

  return (
    <>
      <div className="d-flex justify-content-around pt-4 mb-4">
        <div className="fw-bold text-warning">
          {displayTransactions.length} transaction(s)
        </div>
        <div>
          <Form.Control
            type="text"
            placeholder="Search Transaction"
            onChange={handleOnType}
          />
        </div>
        <div>
          <Button>
            {" "}
            <FaPlusCircle /> Add new transactions
          </Button>
        </div>
      </div>
      <Table striped hover>
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
          {displayTransactions.length > 0 &&
            displayTransactions.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.createdAt.slice(0, 10)}</td>
                <td>{item.title}</td>
                {item.type === "expenses" && (
                  <>
                    <td className="expenses">-${item.amount}</td>
                    <td></td>
                  </>
                )}
                {item.type === "income" && (
                  <>
                    <td></td>
                    <td className="income">+${item.amount}</td>
                  </>
                )}
              </tr>
            ))}

          {/* <tr>
          <td>3</td>
          <td>2-05-2024</td>
          <td>Business</td>
          <td></td>
          <td>$$$</td>
        </tr> */}
          <tr className="fw-bolder text-center">
            <td colSpan={3}>Total Balance</td>

            <td colSpan={2}>
              $
              {displayTransactions.reduce(
                (acc, item) =>
                  item.type === "income"
                    ? acc + item.amount
                    : acc - item.amount,
                0
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TransactionTable;
