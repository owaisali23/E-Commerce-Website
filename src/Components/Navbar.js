import React from "react";
import "../index.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navbarr = () => {
  const { totalqty } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <Navbar.Brand>Navbar</Navbar.Brand>{" "}
          </Link>
          <Nav>
            <Nav.Link>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/"
              >
                Home
              </Link>{" "}
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="history"
              >
                Sell History
              </Link>{" "}
            </Nav.Link>

            <Nav.Link>Pricing</Nav.Link>
            <Link to="cart">
              <Button className="bttn" type="submit">
                Cart {totalqty} <FaCartShopping />
              </Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
