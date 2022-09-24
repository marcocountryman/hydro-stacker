import React from "react";
import "./Home.css";
import { withRouter } from 'react-router-dom';

function Home() {

    return (
        <div className = "home-container">

            <div className = "home-section-1">
                <div className = "home-section-1-left">
                    <img className = "home-image-strawberries" src = "https://hydro-stacker-systems-images.s3.amazonaws.com/strawberries.jpg"></img>
                    <span>Harvest your potential</span>
                </div>


                <div  className = "home-section-1-right">
                    <img src = "https://hydro-stacker-systems-images.s3.amazonaws.com/vertical-system-1.jpg" alt = "sample-sytems"></img>
                    <img src = "https://hydro-stacker-systems-images.s3.amazonaws.com/vertical-system-2.jpg" alt = "sample-system"></img>
                </div>
            </div>

            <h1 className = "header">We'll help you grow your favorite fruits and vegetables</h1>
            
            <div className = "home-section-2">
            
                <img className = "home-system-image" src = "https://hydro-stacker-systems-images.s3.amazonaws.com/home-system.jpg" alt = "home-system"></img>
                <p>Hydro-Stacker Systems™ is a hydroponic vertical gardening system. 
                    Using Hydro-Stackers Systems can increase your fruit and vegetable 
                    yield while decreasing the garden space needed. Grow just about any 
                    plant from your garden using just a few square feet. Our automated 
                    systems do all the watering for you, requiring less effort to get 
                    your garden growing. Hydro-Stacker is currently operating in large 
                    farms with more than 50,000 plants as well as home users with just 
                    a single-stack manual. You won't find a better way to hydroponically
                    grow strawberries, lettuce, tomatoes, cabbage, spinach, peas, basil,
                    dill, or any of the other hundreds of plants that love to grow in 
                    our Hydro-Stacker systems!
                </p>
                <img></img>
            </div>

            <h1 className = "header">Home Gardens</h1>

            <div className = "home-section-3">
                <img  src = "https://hydro-stacker-systems-images.s3.amazonaws.com/sample-system.jpg" alt = "home-garden"></img>
                <p>Our growing systems keep you involved in the plant life cycle by you 
                    determining the watering schedule. Our system includes an electric
                    pump and timer (you will need to get your own reservoir, 
                    a 55-gallon drum works great) for worry-free growing. 
                    Just fill the reservoir up as needed (about once every two weeks), 
                    and let the sun do all the work. Virtually any plant that can
                    be grown in soil can be grown in a Hydro-Stacker unit 
                    (obviously large plants like trees won't fare well). 
                    Pick up a couple of manual units for the corners of 
                    your driveway, flowers will grow so large they will look 
                    like shrubs
                </p>
            </div>

            <h1 className = "header">Commercial Gardens</h1>

            <div className = "home-section-4">
                <p>Are you looking to increase your yields without
                    changing the size of your farm? Do you want to 
                    start a U-Pick garden, letting your customers 
                    harvest their own fruits and vegetables? Are you 
                    tired of dealing with all that dirt and chemical 
                    fertilizer? Hydro-Stacker can custom design and
                    build a system for you utilizing your existing
                    farm space for maximum potential yield. Installing
                    the Hydro-Stacker system is a fast and easy way 
                    to see your crop yield and potentially your 
                    financial return increase dramatically. Hydro-Stacker 
                    has successfully been installed in hundreds of 
                    commercial farms, ranging in size from 15,000 
                    plants to over 1 MILLION plants! Contact 
                    Hydro-Stacker Systems today
                </p>
                <img src = "https://hydro-stacker-systems-images.s3.amazonaws.com/commercial.jpg" alt = "commercial"></img>
            </div>

            <h1 className = "header">Education</h1>
            <p className = "education-section">Are you looking to increase your yields without
                changing the size of your farm? Do you want to 
                start a U-Pick garden, letting your customers 
                harvest their own fruits and vegetables? Are you 
                tired of dealing with all that dirt and chemical 
                fertilizer? Hydro-Stacker can custom design and
                build a system for you utilizing your existing
                farm space for maximum potential yield. Installing
                the Hydro-Stacker system is a fast and easy way 
                to see your crop yield and potentially your 
                financial return increase dramatically. Hydro-Stacker 
                has successfully been installed in hundreds of 
                commercial farms, ranging in size from 15,000 
                plants to over 1 MILLION plants! Contact 
                Hydro-Stacker Systems today
            </p>
        </div>
    )
}

export default Home;