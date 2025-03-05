import React from "react";
import { Link } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";
import { FaPencilAlt, FaHome, FaInfoCircle, FaEdit } from "react-icons/fa";

const Navbar = () => {
  const { ready, authenticated, login, logout } = usePrivy();

  if (!ready) {
    return (
      <div className="flex justify-center items-center h-16 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold hover:text-blue-400 transition duration-300">
          <FaPencilAlt className="text-3xl text-blue-400" />
          <span className="tracking-wide">AI Writer</span>
        </Link>

       
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="flex items-center space-x-1 hover:text-blue-400 transition duration-300">
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 hover:text-blue-400 transition duration-300">
            <FaInfoCircle className="text-xl" />
            <span>About</span>
          </Link>
          {authenticated && (
            <Link to="/form" className="flex items-center space-x-1 hover:text-blue-400 transition duration-300">
              <FaEdit className="text-xl" />
              <span>Form</span>
            </Link>
          )}
        </div>

        
        <div>
          {authenticated ? (
            <button
              onClick={logout}
              className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition duration-300 shadow-md"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold transition duration-300 shadow-md"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
