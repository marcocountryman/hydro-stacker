import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, withRouter } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { CgMenu } from '@fortawesome/react-fontawesome';

function Navbar() {

    const [ toggleMenu, setToggleMenu ] = useState(false);
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    const [ toggleLogo, setToggleLogo ] = useState(true);

    const toggleNav = (e) => {
        setToggleMenu(!toggleMenu);
     
        toggleLogoRender();
        
    }

    const toggleLogoRender = () => {
        setToggleLogo(!toggleLogo);
    }
    
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <div className = "nav-container">
            <div className = "navbar">

                    {/* {
                        toggleLogo && <img className = "nav-logo" src = "https://hydro-stacker-systems-images.s3.amazonaws.com/hydro-stacker-logo.jpg" alt = "logo"></img>
                    }
                   {
                    (toggleMenu || screenWidth > 500) && (                    
                    <div id = "nav-links">
                        <Link to = "/" onClick = {toggleNav}>🏠 HOME</Link>
                        <Link to = "/shop" onClick = {toggleNav}>🛍️ SHOP</Link>
                        <Link to = "/learn" onClick = {toggleNav}>📚 LEARN</Link>
                        <Link to = "/gallery" onClick = {toggleNav}>🌱 GALLERY</Link>
                        <Link to = "/contact" onClick = {toggleNav}>📞 CONTACT</Link>
                    </div>)
                   } */}

                {/* <FontAwesomeIcon icon = {faBars} id = "menu-icon" onClick = {toggleNav}/> */}
                
                <img className = "nav-logo" src = "https://hydro-stacker-systems-images.s3.amazonaws.com/hydro-stacker-logo.jpg" alt = "logo"></img>

                <div id = "nav-links">
                    <Link to = "/" onClick = {toggleNav}>🏠 HOME</Link>
                    <Link to = "/shop" onClick = {toggleNav}>🛍️ SHOP</Link>
                    <Link to = "/learn" onClick = {toggleNav}>📚 LEARN</Link>
                    <Link to = "/gallery" onClick = {toggleNav}>🌱 GALLERY</Link>
                    <Link to = "/contact" onClick = {toggleNav}>📞 CONTACT</Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar;