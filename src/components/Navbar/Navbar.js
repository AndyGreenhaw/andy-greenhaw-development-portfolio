import React from "react"
import { Link, useLocation } from "react-router-dom"

import "./Navbar.css"

function Navbar() {

const location = useLocation();

return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link" : "nav-link"}>
            Home
        </Link>
        {/* <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a> */}
      </li>
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link" : "nav-link"}>
            About
        </Link>
        {/* <a className="nav-link" href="#"> About </a> */}
      </li>
      <li className="nav-item">
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link" : "nav-link"}>
            Portfolio
        </Link>
        {/* <a className="nav-link" href="/portfolio"> Portfolio </a> */}
      </li>
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link" : "nav-link"}>
            Contact
        </Link>
        {/* <a className="nav-link" href="#"> Contact </a> */}
      </li>
    </ul>
  </div>
</nav>
)
}

export default Navbar