import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";

const Header = () => {
  return (
    <Navbar className="w-screen" fluid={true} rounded={true}>
      <Navbar.Brand className="text-slate-900" as={Link} to="/">
        <span className="flex items-center gap-3 self-center whitespace-nowrap text-xl font-semibold">
          <p>Trip</p>
          <FaArrowAltCircleRight></FaArrowAltCircleRight>
          <p>Trip</p>
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-4 items-center">
        <Link className="text-md uppercase" to="/signup">
          Sign Up
        </Link>
        <Link className="text-md uppercase" to="/login">
          Log In
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link as={Link} className="text-md uppercase" to="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} className="text-md uppercase" to="/about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} className="text-md uppercase" to="/contact">
          Contact
        </Navbar.Link>
        <Navbar.Link as={Link} className="text-md uppercase" to="/dashBoard">
          DashBoard
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
