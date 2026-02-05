import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import PedgyBiotech from "../assets/PedgyBiotech.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/" end>
          <img className="logoImg" src={PedgyBiotech} alt="img" />
        </NavLink>
      </div>

      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${open ? "show" : ""}`}>
        <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
        <li><NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
      </ul>
    </div>
  );
}
