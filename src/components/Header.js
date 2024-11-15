import React from "react";
import "../App.css";

const Header = () => {
  return (
    <nav className="deep-purple darken-4">
      <div className="navigation">
        <a href="/">Shop</a>
        <ul>
          <li>
            <a
              href="https://github.com/katetimofeeva/simple-shop"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
