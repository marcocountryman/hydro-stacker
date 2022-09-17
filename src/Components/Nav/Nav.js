import React from "react";
import "./Nav.css"

function Nav() {

    return (
        <div className = "nav-container">

            <img className = "nav-image" src = "https://hydro-stacker-systems-images.s3.amazonaws.com/greens.jpg" alt = "nav"></img>

            <div className = "nav-contents">

                <div className = "nav-content-left">
                    <span>HydroStacker Systems</span>
                </div>

                <div className = "nav-content-right">
                    <span>HOME</span>
                    <span>SHOP</span>
                    <span>LEARN</span>
                    <span>ABOUT</span>
                    <span>GALLERY</span>
                    <span>CONTACT</span>
                </div>


            </div>
            
            <span className = "nav-motto">Harvest your potential</span>
           
        </div>
    )
}

export default Nav