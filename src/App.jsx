import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";
import DefaultLayout from "../layout/DefaultLayout";
import Transactions from "./pages/Transactions";
import DashBoard from "./pages/Dashboard";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUP />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
