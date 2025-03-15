import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImExit } from "react-icons/im";
import { TbLogin } from "react-icons/tb";
import { MdCreate } from "react-icons/md";
import { GrDashboard } from "react-icons/gr";
import { GiCash } from "react-icons/gi";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/signup">
              SignUP <MdCreate />
            </Link>
            <Link className="nav-link" to="/">
              LogIN <TbLogin />
            </Link>
            <Link className="nav-link" to="/dashboard">
              Dashboard <GrDashboard />
            </Link>
            <Link className="nav-link" to="/transactions">
              Transactions <GiCash />
            </Link>
            <Link className="nav-link" to="/logout">
              logOUT <ImExit />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
