import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Beautiful Analytics</h1>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
