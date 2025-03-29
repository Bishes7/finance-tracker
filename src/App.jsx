import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";
import DefaultLayout from "../layout/DefaultLayout";
import Transactions from "./pages/Transactions";
import DashBoard from "./pages/Dashboard";
import { Auth } from "./auth/Auth";
import { useEffect } from "react";
import { useUser } from "./components/context/UserContext";
import { autoLogin } from "./utils/Users";
import "./components/ChartConfig";

function App() {
  const { user, setUser } = useUser(); // desctructuring from context api

  useEffect(() => {
    !user?._id && invokeUsers();
  }, [user?._id]);

  const invokeUsers = async () => {
    const user = await autoLogin();
    setUser(user);
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUP />} />
          <Route
            path="transactions"
            element={
              <Auth>
                <Transactions />
              </Auth>
            }
          />
          <Route
            path="dashboard"
            element={
              <Auth>
                <DashBoard />
              </Auth>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
