import { createContext, useContext, useState } from "react";
import { fetchTransactions } from "../../helper/axiosHelper";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);

  // Function to fetch the transactions
  const getTransactions = async () => {
    const { status, transaction } = await fetchTransactions();

    status === "success" && setTransactions(transaction);
  };

  return (
    <userContext.Provider
      value={{ user, setUser, transactions, getTransactions }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
