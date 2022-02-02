import React, { useState } from "react";
import { Link } from "react-scroll";
// import "./Navbar.scss";

const Navbar = () => {
  const [nav, setNav] = useState(0);
  const navList = {
    0: ".home()",
    1: ".education()",
    2: ".experience()",
    3: ".skills()",
    4: ".info()",
  };
  return (
    <nav className="navbar">
      <input type="checkbox" id="nav-check"></input>
      <div className="current-part">
      <div className="logo"><span className="span-4">class</span> <span className="span-1">Profile()</span></div>
        {/* <h1 className="mobo-header">{navList[nav]}</h1> */}
      </div>
      <div className="nav-btn">
        <label for="nav-check">
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
          onClick={() => setNav(0)}
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
          onClick={() => setNav(1)}
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
          onClick={() => setNav(2)}
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
          onClick={() => setNav(3)}
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
          onClick={() => setNav(4)}
          className="link"
        >
          .info()
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
