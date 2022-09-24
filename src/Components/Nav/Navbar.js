import React from "react";
import "./Navbar.css";
import { Link, withRouter } from 'react-router-dom';


function Navbar() {

                                                                                                                                   
    return (
        <div className = "nav-container">
            <div className = "navbar">

                <div className = "nav-left">
                
                    <img className = "nav-logo" src = "https://hydro-stacker-systems-images.s3.amazonaws.com/hydro-stacker-logo.jpg" alt = "logo"></img>
                   
                    <Link to = "/">🏠 HOME</Link>
                    <Link to = "/shop">🛍️ SHOP</Link>
                    <Link to = "/learn">📚 LEARN</Link>
                    <Link to = "/about">💁‍♀️ ABOUT</Link>
                    <Link to = "/gallery">🌱 GALLERY</Link>
                </div>

                <div className = "nav-right">
                    <button>CONTACT 📱</button>
                </div>
               
            </div>
        </div>
    )
}

export default Navbar;