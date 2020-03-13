import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "purple" }}
    >
      <h2 className="navbar-brand">Google Books</h2>
      <a className="nav-link" href="/" style={{ color: "black" }}>
        Search
      </a>
      <a className="nav-link" href="/books" style={{ color: "black" }}>
        Saved
      </a>
    </nav>
  );
}

export default Nav;
