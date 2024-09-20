import React from "react";
import navBar from "../../data/navBar.json";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import NavBarItem from "../NavBarItem/NavBarItem";

const Navbar = () => {
  const navigate = useNavigate();

  //back home
  const handleHome = () => {
    navigate("/");
  };

  //render
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navContainer">
          <span className="logo" onClick={handleHome}>
            Booking Website
          </span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
        <NavBarItem items={navBar} />
      </div>
    </div>
  );
};

export default Navbar;
