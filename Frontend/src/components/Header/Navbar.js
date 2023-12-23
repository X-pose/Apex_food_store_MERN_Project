import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./nav.css";



function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (  
        <header>
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">Food & Beverage</a>
                <a href="#">Cart</a>
                <a href="#">Contact</a>
                <a href="#">Login/Signup</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>   
            </button>
        </header>
    );
}

export default Navbar;