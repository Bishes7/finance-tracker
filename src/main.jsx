import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

export const userContext = createContext();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <userContext.Provider value={{ name: "Bishes", address: "adamghat" }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </userContext.Provider>
  </StrictMode>
);
