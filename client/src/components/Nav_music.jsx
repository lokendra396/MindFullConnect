import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import "./Nav_music.css";
import toast from "react-hot-toast";
// import logo from './logo.png'
import logomusic from "./logomusic.png";
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
      <nav className="navbarmusic">
        <div className="navbar__logo">
          <NavLink to="/">
            <img
              style={{ filter: "drop-shadow(#000 2px 2px 5px)" }}
              src={logomusic}
              alt=""
            />
          </NavLink>
        </div>
        <ul
          style={{ marginBottom: "0px", paddingLeft: "0" }}
          className={open ? "navbar__listms active" : "navbar__listms"}
        >
          <li>
            <NavLink
              style={{ color: "white", textShadow: "2px 2px 5px #000" }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: "white", textShadow: "2px 2px 5px #000" }}
              to="/community"
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: "white", textShadow: "2px 2px 5px #000" }}
              to="/music"
            >
              Music
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: "white", textShadow: "2px 2px 5px #000" }}
              to="/education"
            >
              Education
            </NavLink>
          </li>

          <li>
            <NavLink
              style={{ color: "white", textShadow: "2px 2px 5px #000" }}
              to="/helplines"
            >
              Helplines
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: "white", textShadow: "2px 2px 5px #000" }}
              to="/contact"
            >
              Contact us
            </NavLink>
          </li>
          {!auth.user ? (
            <>
              <li>
                <NavLink
                  style={{ color: "white", textShadow: "2px 2px 5px #000" }}
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "white", textShadow: "2px 2px 5px #000" }}
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  onClick={handleLogout}
                  style={{ color: "white", textShadow: "2px 2px 5px #000" }}
                  to="/login"
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="navbar__menu" onClick={handleClick}>
          <div
            style={{ filter: "invert() drop-shadow(#000 1px 1px 3px)" }}
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
