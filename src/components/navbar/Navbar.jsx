import React from "react";
import navBar from "../../data/navBar.json";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import NavBarItem from "../NavBarItem/NavBarItem";
import {
  getTolocalStorage,
  removeTolocalStorage,
} from "../../data/localstorage";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = getTolocalStorage("currentUserActive");

  //back home
  const handleHome = () => {
    navigate("/");
  };
  //
  const logoutHandler = (e) => {
    e.preventDefault();
    removeTolocalStorage("currentUserActive");
    navigate("/login");
  };

  //render
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navContainer">
          <span className="logo" onClick={handleHome}>
            Booking Website
          </span>
          {currentUser ? (
            <div className="navItems">
              <span>{currentUser.username}</span>
              <button className="navButton" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          ) : (
            <div className="navItems">
              <Link
                to="/signup"
                style={{ color: "white", textDecoration: "none" }}
              >
                <button className="navButton">Register</button>
              </Link>
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                <button className="navButton">Login</button>
              </Link>
            </div>
          )}
        </div>
        {currentUser ? <NavBarItem items={navBar} /> : <></>}
      </div>
    </div>
  );
};

export default Navbar;
