import './Navbar.css';

import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { IconContext } from "react-icons"; // for react icon styling
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState, useEffect, useRef } from 'react';


const Navbar = () => {
    const[menuIsOpen, setMenuIsOpen] = useState(false);

    function openMenu() {
        setMenuIsOpen(true);
    }
    function closeMenu() {
        setMenuIsOpen(false);
    }
    
    //checking if user clicks outside the mobile menu
    const ref = useRef()
    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the menu is open and the clicked target is not within the menu,
          // then close the menu
          if (menuIsOpen && ref.current && !ref.current.contains(e.target)) {
            setMenuIsOpen(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [menuIsOpen])


    return (
        <div className="nav-container">
            <p id="logo"><a href="/"><FavoriteIcon /></a></p>
            
            {/* when in tablet/mobile view */}
            { menuIsOpen ? 
                <div className="mobile-menu" ref={ref}>
                    <IconContext.Provider value={{className: "x-icon"}}>
                        <IoClose size="30px" onClick={closeMenu}/>
                    </IconContext.Provider>

                    <nav className="mobile-links">
                        <ul onClick={closeMenu}> 
                            <li><a href='/#about'>About</a></li>
                            <li><a href='/#experience'>Experience</a></li>
                            <li><a href='/#projects'>Projects</a></li>
                            <li><a href='/#contact'>Contact</a></li>
                            <li><button id='resume-btn'> Resume </button></li>
                        </ul>
                    </nav>
                </div> :   
                          
                <div className="hamburger-icon-container">
                    <IconContext.Provider value={{className: "hamburger-menu-icon"}}>
                        <GiHamburgerMenu size="26px" onClick={openMenu}/>
                    </IconContext.Provider>
                </div>
            }  

            {/* when in desktop view */}
            <nav className="links">
                <ul>
                    <li><a href='/#about'>About</a></li>
                    <li><a href='/#experience'>Experience</a></li>
                    <li><a href='/#projects'>Projects</a></li>
                    <li><a href='/#contact'>Contact</a></li>
                    <button id='resume-btn'> Resume </button>
                </ul>
            </nav>
        </div>
      );
}

export default Navbar;