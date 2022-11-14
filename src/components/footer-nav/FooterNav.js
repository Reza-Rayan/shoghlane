import React from "react";
import { Link } from "react-router-dom";
import "./FooterNav.css";

const FooterNav = ({ text, link }) => {
  return (
    <li className="footer-nav font-medium  list-none my-4">
      <Link to={link} className="hover:transition-colors">
        {text}
      </Link>
    </li>
  );
};

export default FooterNav;
