import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImExit } from "react-icons/im";
import { TbLogin } from "react-icons/tb";
import { MdCreate } from "react-icons/md";
import { GrDashboard } from "react-icons/gr";
import { GiCash } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useUser } from "../src/components/context/UserContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Header = () => {
  const { user, setUser } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  // Function to logout the user
  const handleOnLogOut = () => {
    // First remove the jwtToken from localstorage
    localStorage.removeItem("accessToken");
    toast.dark("Logged Out Successfully");
    setShowMenu(false);

    setUser({});
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="bg-body-dark"
      expanded={showMenu}
    >
      <Container>
        <Navbar.Brand href="#home">
          <FaWeight />{" "}
          <span className="fw-bolder text-info mx-3 ">Finance Tracker</span>
        </Navbar.Brand>

        {user?.name && (
          <motion.span
            style={{
              fontFamily: "cursive",
              fontSize: "22px",
              fontWeight: "bolder",
            }}
            initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
            animate={{ scale: 1.2, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome {user.name}
          </motion.span>
        )}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowMenu(true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link
                  className="nav-link fw-bold"
                  to="/dashboard"
                  onClick={() => setShowMenu(false)}
                >
                  Dashboard <GrDashboard />
                </Link>
                <Link
                  className="nav-link fw-bold"
                  to="/transactions"
                  onClick={() => setShowMenu(false)}
                >
                  Transactions <GiCash />
                </Link>
                <Link
                  className="nav-link fw-bold"
                  to="/"
                  onClick={handleOnLogOut}
                >
                  logOUT <ImExit />
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="nav-link fw-bold"
                  to="/signup"
                  onClick={() => setShowMenu(false)}
                >
                  SignUP <MdCreate />
                </Link>
                <Link
                  className="nav-link fw-bold"
                  to="/"
                  onClick={() => setShowMenu(false)}
                >
                  LogIN <TbLogin />
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
