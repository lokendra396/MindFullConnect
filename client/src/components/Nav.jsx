import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import "./Nav.css";
import logo from "./logo.png";
import toast from "react-hot-toast";
const Nav = () => {
  const [auth, setAuth] = useAuth();
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav style={{ padding: "0px 20px" }} className="navbar">
        <div className="navbar__logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <ul
          style={{ marginBottom: "0px", paddingLeft: "0" }}
          className={open ? "navbar__list active" : "navbar__list"}
        >
          <li>
            <NavLink to="/community">Community</NavLink>
          </li>
          <li>
            <NavLink to="/music">Music</NavLink>
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>
          </li>

          <li>
            <NavLink to="/helplines">Helplines</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          {!auth.user ? (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink onClick={handleLogout} to="/login">
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="navbar__menu" onClick={handleClick}>
          <div
            className={open ? "navbar__menu-icon open" : "navbar__menu-icon"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
