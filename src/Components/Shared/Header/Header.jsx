import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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
        {user?.uid ? (
          <button
            onClick={handleLogOut}
            className="text-xs uppercase rounded outline outline-slate-900 hover:bg-slate-900 hover:text-white p-1 font-bold"
          >
            Log Out
          </button>
        ) : (
          <Link
            className="text-xs uppercase rounded outline outline-slate-900 hover:bg-slate-900 hover:text-white p-1 font-bold"
            to="/login"
          >
            Log In
          </Link>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link as={Link} className="text-md uppercase" to="/">
          <span className="hover:bg-slate-900 p-2 hover:text-white">Home</span>
        </Navbar.Link>
        <Navbar.Link as={Link} className="text-md uppercase" to="/about">
        <span className="hover:bg-slate-900 p-2 hover:text-white">About</span>
        </Navbar.Link>
        <Navbar.Link as={Link} className="text-md uppercase" to="/contact">
        <span className="hover:bg-slate-900 p-2 hover:text-white">Contact</span>
        </Navbar.Link>

        {user?.uid ? (
          <Navbar.Link as={Link} to="/dashBoard">
            <div className="flex items-center gap-1">
              {user?.photoURL ? (
                <img className="h-7 rounded" src={user.photoURL} alt="" />
              ) : (
                <FaUserAlt></FaUserAlt>
              )}
              <h3 className="text-sm uppercase bg-slate-900 hover:bg-white hover:text-slate-900 text-white p-1">
                {user?.displayName}
              </h3>
            </div>
          </Navbar.Link>
        ) : (
          <></>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
