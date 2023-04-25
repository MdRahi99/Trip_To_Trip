import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

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
        <Link
          className="text-md uppercase bg-slate-900 text-white p-2 font-bold"
          to="/login"
        >
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
        <Navbar.Link as={Link} to="/dashBoard">
          <div className="flex items-center gap-3">
            {user?.photoURL ? (
              <img className="h-10 rounded-full" src={user.photoURL} alt="" />
            ) : (
              <FaUserAlt></FaUserAlt>
            )}
            <h3 className="text-md uppercase bg-slate-900 text-white p-2">
              {user?.displayName}
            </h3>
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
