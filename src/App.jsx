import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUP from "./pages/SignUP";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
