import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";

const Header = () => {
  return (
    <Navbar className="w-screen" fluid={true} rounded={true}>
      <Navbar.Brand className="bg-slate-900 p-2 text-white" as={Link} to="/">
        
        <span className="flex items-center gap-3 self-center whitespace-nowrap text-xl font-semibold">
          <p>Trip</p> 
          <FaArrowAltCircleRight></FaArrowAltCircleRight>
          <p>Trip</p>
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Link className="bg-slate-900 text-white p-2 items-center" to="/dashboard">
          <MdDashboard></MdDashboard>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about">About</Navbar.Link>
        <Navbar.Link as={Link} to="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
