import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";
import DefaultLayout from "../layout/DefaultLayout";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUP />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
