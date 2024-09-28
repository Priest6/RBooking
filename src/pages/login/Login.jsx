import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { getTolocalStorage, saveToLocalStorage } from "../../data/localstorage";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userArr =
    getTolocalStorage("users") === null ? [] : getTolocalStorage("users");

  const loginHandler = (e) => {
    e.preventDefault();
    const currentUser = userArr.find(
      (user) => user.username === username && user.password === password
    );
    if (currentUser) {
      saveToLocalStorage("currentUserActive", currentUser);
      navigate("/");
    } else {
      alert("User doesn't exist or wrong information ");
    }
  };

  //render
  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="lContainer">
          <h1 className="lTitle">Login</h1>
          <div className="litem">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="lInput"
              required
            />
          </div>
          <div className="litem">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="lInput"
              required
            />
          </div>
          <button className="lButton" onClick={loginHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
