import React from "react";
import './ContactForm.css';

function ContactForm() {

    return(
        <div className = "form-container">

            <div className = "form-content">
                <form action="https://formsubmit.co/15beae805014e22255d85e7df6d6b60b" method="POST" className = "contact-form">
                    <label>
                    Name
                    <input type="text" name="name" required/>
                    </label>
            
                    <label>
                    Email
                    <input type="email" name="email" required/>
                    </label>
                
                    <label>
                    Inquiry
                        <input type="text" name="body" required/>
                    </label>

                    <button type="submit">Send</button>
            </form>
            </div>
    
        </div>
    )
}

export default ContactForm;