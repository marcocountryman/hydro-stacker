import React from "react";
import "./Home.css";

function Home() {

    return (
        <div className = "home-container">
            
            <h1 className = "hydro-stacker-header-1">HydroStacker Systems</h1>

            <div className = "section-1">
                
                <div className = "section-1-content">
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
                          our Hydro-Stacker systems!</p>
                </div>
                
                <img className = "section-1-image"src="https://hydro-stacker-systems-images.s3.amazonaws.com/sample-system.jpg" alt = "sample-system"></img>
            
            </div>

            <h1 className = "hydro-stacker-header-2">Home Gardens</h1>

            <div className = "section-2">

                <img className = "section-2-image" src = "https://hydro-stacker-systems-images.s3.amazonaws.com/home-system.jpg" alt = "section-2"></img>

                <div className = "section-2-content">
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
                          like shrubs</p>
                </div>

            </div>

            <h1 className = "hydro-stacker-header-1">Commercial Growing</h1>

            <div className = "section-3">
                <div className = "section-3-content">
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
                            Hydro-Stacker Systems today</p>
                </div>

                <img className = "section-3-image" src = "https://hydro-stacker-systems-images.s3.amazonaws.com/commercial.jpg" alt = "commercial"></img>
            </div>

            <div className = "section-education">
                <h1>Education</h1>
                <p>Would you like to teach your students about the growing 
                    cycle of plants? Is your lab space limited? The Hydro-Stacker 
                    vertical hydroponic growing unit is the perfect answer. 
                    Hydro-Stacker will design your system and help you and your
                     class install it. We already teach hydroponic methods at several 
                     schools and have gotten positive feedback from everyone involved.</p>
            </div>
        </div>
    )
}

export default Home