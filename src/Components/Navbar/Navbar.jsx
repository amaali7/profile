import React from "react";
import { Link } from "react-scroll";
// import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <input type="checkbox" id="nav-check"></input>
      <div className="current-part">
      <div className="nav-logo"><a href="#Home"><span className="span-4">class</span> <span className="span-1">Profile()</span></a></div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-link">
        <Link
          activeClass="active-link"
          to="Home"
          spy={true}
          smooth={true}
          offset={-190}
          duration={1500}
          className="link"
        >
          .home()
        </Link>
        <Link
          activeClass="active-link"
          to="Education"
          spy={true}
          smooth={true}
          offset={-54}
          duration={1500}
          className="link"
        >
          .education()
        </Link>
        <Link
          activeClass="active-link"
          to="Experience"
          spy={true}
          smooth={true}
          offset={-54}
          duration={1500}
          className="link"
        >
          .experience()
        </Link>
        <Link
          activeClass="active-link"
          to="Skills"
          spy={true}
          smooth={true}
          offset={-54}
          duration={1500}
          className="link"
        >
          .skills()
        </Link>
        <Link
          activeClass="active-link"
          to="Info"
          spy={true}
          smooth={true}
          offset={-54}
          duration={1500}
          className="link"
        >
          .info()
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
