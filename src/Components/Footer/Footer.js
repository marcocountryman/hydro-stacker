import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className = "footer-container">

            <div className = "footer-content">
                <p>Hydro-Stacker Systems™ is a proud, Veteran Owned Business.</p>

                <div className = "footer-right">
                    <p>We'd love to hear from you</p>
                    <button><Link to = "/contact">CONTACT</Link></button>
                </div>
            </div>

        </div>
    )
}

export default Footer;