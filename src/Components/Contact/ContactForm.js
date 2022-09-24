import React, { useEffect }from "react";
import './ContactForm.css';

function ContactForm() {

    
    return(
    
        <div className = "form-container">

            <div className = "form-content">
                <form action="https://formsubmit.co/15beae805014e22255d85e7df6d6b60b" method="POST" className = "contact-form">
                    
                    <div className = "form-top">

                        <div className = "form-name">
                            <label>
                            Name
                            </label>
                            <input type="text" name="name" required/>
                        </div>

                        <div className = "form-email">
                            <label>
                            Email
                            </label>
                            <input type="email" name="email" required/>
                        </div>
            
                    </div>
                 
                
                    <div className = "form-bottom">
                        <label>
                            Inquiry
                        </label>
                        <input type="text" name="body" required/>
                    </div>
                   

                    <button type="submit">Send</button>
            </form>
            </div>
    
        </div>
    )
}

// function hideContactButton() {
//         // const contactButtons = document.getElementsByClassName("contact-button");

//         // for (let i = 0; i < contactButtons.length; i++) {
//         //     contactButtons[i].style.visibility = 'hidden';
//         // }
//         console.log('mounted');
//     }
    
// function showContactButton() {
//         // const contactButtons = document.getElementsByClassName("contact-button");

//         // for (let i = 0; i < contactButtons.length; i++) {
//         //     contactButtons[i].style.visibility = 'visible';
//         // }
//         console.log('unmounted')   
//     }

export default ContactForm;