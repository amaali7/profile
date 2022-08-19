import './navbar.style.scss';
import { useMediaQuery, breakpoints } from '../../hooks/MediaQuery';
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";


const Navbar = ({ props }) => {
  const [selectLink, setselectLink] = useState(false);
  const [isSmallActive, setIsSmallActive] = useState(false);
  const isMobile = useMediaQuery(breakpoints.mobile);
  const isTablet = useMediaQuery(breakpoints.tablet);
  useEffect(() => {
    if (!(isMobile || isTablet)) {
      setIsSmallActive(false);
    }
  }, [isMobile, isTablet]);
  const linkClick = () => {
    setselectLink(current => !current);
    setIsSmallActive(current => !current);
    console.log('Link Clicked !', selectLink);
  };
  const buttonClick = () => {
    setIsSmallActive(current => !current);
    console.log('Button Clicked !');
  };
  return (
    <nav id="main-nav">
      <div className="current-part">
        <div className="nav-logo"><a href="#Home"><span className="span-4">class</span> <span className="span-1">Profile()</span></a></div>
      </div>
      <ul
        className={`${(isMobile || isTablet) ? "small-nav" : "normal-nav"}`}
        style={{ height: `${isSmallActive ? 'calc(100vh - 56px)' : (isMobile || isTablet) ? '0px' : '56px'}` }}
      >
        <li>
          <Link
            activeClass="active-link"
            to="Home"
            spy={true}
            smooth={true}
            offset={-190}
            duration={1500}
            className="link"
            onClick={linkClick}
          >
            .home()
          </Link>

        </li>
        <li>
          <Link
            activeClass="active-link"
            to="Education"
            spy={true}
            smooth={true}
            offset={-54}
            duration={1500}
            className="link"
            onClick={linkClick}
          >
            .education()
          </Link>
        </li>
        <li>
          <Link
            activeClass="active-link"
            to="Experience"
            spy={true}
            smooth={true}
            offset={-54}
            duration={1500}
            className="link"
            onClick={linkClick}
          >
            .experience()
          </Link>

        </li>
        <li>
          <Link
            activeClass="active-link"
            to="Skills"
            spy={true}
            smooth={true}
            offset={-54}
            duration={1500}
            className="link"
            onClick={linkClick}
          >
            .skills()
          </Link>

        </li>
        <li>
          <Link
            activeClass="active-link"
            to="Info"
            spy={true}
            smooth={true}
            offset={-54}
            duration={1500}
            className="link"
            onClick={linkClick}
          >
            .info()
          </Link>
        </li>
      </ul>
      {(isMobile || isTablet) &&
        <label onClick={buttonClick}>
          <span></span>
          <span></span>
          <span></span>
        </label>
      }
    </nav>
  );
};

export default Navbar;
