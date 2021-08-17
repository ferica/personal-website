import './Navbar.css';

import { HashLink as Link } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { IconContext } from "react-icons"; // for react icon styling
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState, useEffect, useRef } from 'react';


const Navbar = () => {
    
    function openInNewTab(url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

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
            <p id="logo"><a href="/personal-website"><FavoriteIcon /></a></p>
            
            {/* when in tablet/mobile view */}
            { menuIsOpen ? 
                <div className="mobile-menu" ref={ref}>
                    <IconContext.Provider value={{className: "x-icon"}}>
                        <IoClose size="30px" onClick={closeMenu}/>
                    </IconContext.Provider>

                    <nav className="mobile-links">
                        <ul onClick={closeMenu}> 
                            <li><Link to="/#about">About</Link></li>
                            <li><Link to="/#experience">Experience</Link></li>
                            <li><Link to="/#projects">Projects</Link></li>
                            <li><Link to="/#contact">Contact</Link></li>
                            <li><button id='resume-btn' onClick={() => openInNewTab('https://docs.google.com/document/d/12dH9-D-9Cgz3IPD_GFRjEJy-EsVO_1lgg1gkc_2A968/edit?usp=sharing')}> Resume </button></li>
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
                    <li><Link to="/#about">About</Link></li>
                    <li><Link to="/#experience">Experience</Link></li>
                    <li><Link to="/#projects">Projects</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                    {/* <li><a href='/#about'>About</a></li>
                    <li><a href='/#experience'>Experience</a></li>
                    <li><a href='/#projects'>Projects</a></li>
                    <li><a href='/#contact'>Contact</a></li> */}
                    <button id='resume-btn' onClick={() => openInNewTab('https://docs.google.com/document/d/12dH9-D-9Cgz3IPD_GFRjEJy-EsVO_1lgg1gkc_2A968/edit?usp=sharing')}> Resume </button>
                </ul>
            </nav>
        </div>
      );
}

export default Navbar;