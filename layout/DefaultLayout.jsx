import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Page Content */}

      <main className="main">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
