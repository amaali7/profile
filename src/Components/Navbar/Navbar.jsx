import React, { useState } from 'react';
import { Link} from "react-scroll";
import './Navbar.scss'


const Navbar = () => {
    const [nav, setNav] = useState(0);
    const navList = {
        0: 'Home',
        1: 'Education',
        2: 'Experience',
        3: 'Skills',
        4: 'Info'
    }
    return (
        <nav className='navbar'>
            <input type="checkbox" id="nav-check" ></input>
            <div className="current-part">
                <h1 className="mobo-header">
                    {navList[nav]}
                </h1>
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className='nav-link'>
                <Link
                    activeClass='active-link'
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-190}
                    duration={1500}
                    onClick={()=> setNav(0)}
                >
                    Home
            
                </Link>
                <Link
                    activeClass='active-link'
                    to="Education"
                    spy={true}
                    smooth={true}
                    offset={-54}
                    duration={1500}
                    onClick={()=> setNav(1)}

                >
                    Education
            
                </Link>
                <Link
                    activeClass='active-link'
                    to="Experience"
                    spy={true}
                    smooth={true}
                    offset={-54}
                    duration={1500}
                    onClick={()=> setNav(2)}
                >
                    Experience
            
                </Link>
                <Link
                    activeClass='active-link'
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-54}
                    duration={1500}
                    onClick={()=> setNav(3)}
                >
                    Skills
            
                </Link>
                <Link
                    activeClass='active-link'
                    to="Info"
                    spy={true}
                    smooth={true}
                    offset={-54}
                    duration={1500}
                    onClick={()=> setNav(4)}
                >
                    Info
            
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;