import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  // logout the user
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {localStorage.getItem("user") ? (
            <Link onClick={handleLogout}>Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
