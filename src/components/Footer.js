import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="deep-purple  accent-2">
      <div className="navigation">
        <div>&copy; {new Date().getFullYear()} Copyright Text</div>
        <a href="#">Repo</a>
      </div>
    </footer>
  );
};

export default Footer;
