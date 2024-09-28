import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { getTolocalStorage, saveToLocalStorage } from "../../data/localstorage";

const Signup = () => {
  const navigate = useNavigate();
  const userArr =
    getTolocalStorage("users") === null ? [] : getTolocalStorage("users");

  const signupHanler = (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      phoneNumber: e.target.phonenumber.value,
      password: e.target.password.value,
    };

    const validateForm = () => {
      const checkEmail = () => {
        if (userArr.length === 0) {
          return false;
        } else {
          const duplicate = userArr.filter((arr) => arr.email === user.email);
          if (duplicate.length === 0) {
            return false;
          } else {
            return true;
          }
        }
      };
      if (checkEmail()) {
        alert("trung email!!!");
        return false;
      }
      return true;
    };

    if (validateForm()) {
      userArr.push(user);
      saveToLocalStorage("users", userArr);
      navigate("/login");
    }
  };

  //render
  return (
    <div>
      <Navbar />
      <div className="signup">
        <form className="fContainer" onSubmit={signupHanler}>
          <h1 className="fTitle">Sign Up</h1>
          <div className="item">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
            />
          </div>
          <div className="item">
            <label>Fullname</label>
            <input
              type="text"
              placeholder="Fullname"
              name="fullname"
              required
            />
          </div>
          <div className="item">
            <label>Fullname</label>
            <input type="text" placeholder="Email" name="email" required />
          </div>
          <div className="item">
            <label>Fullname</label>
            <input
              type="number"
              placeholder="Phone Number"
              name="phonenumber"
              required
            />
          </div>
          <div className="item">
            <label>Fullname</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <button className="lButton" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
