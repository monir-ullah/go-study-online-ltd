// This is use for importing Components and CSS style
import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        // This is for Contact Page
        <div className="d-flex">
            <div className="shadow-custom">
                
             <h3>Contact Us</h3>

             {/* This is use for contact input Section */}
                    <div className="contact-input">
                        <input type="text" placeholder="Your Name"  />
                        
                        <input type="text" placeholder="Your Mail"  />
                        <input type="text" placeholder="Your Phone Number"  />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message..."></textarea>
                        <button className="btn button-send"><strong>Submit Message</strong></button>
                    </div>
            </div> 

            {/* This is use for Contact info Number, Mail, Address */}
            <div className="contact-info">
                <div className="contact-phone-div">
                    <h1><i class="fas fa-phone-alt"></i></h1>
                    <h4>Our Numbers</h4>
                    <p>+ 61 (2) 8093 3402</p>
                    <p>+ 61 (2) 8093 3402</p>
                </div>
                <div className="contact-Mail-div">
                    <h1><i class="fas fa-envelope"></i></h1>
                    <h4>Email Address</h4>
                    <p>admission@gostudy.com</p>
                    <p>info@gostudy.com</p>
                </div>
                <div className="contact-address-div">
                    <h1><i class="fas fa-location-arrow"></i></h1>
                    <h4>Our Numbers</h4>
                    <p>Collin Street West, Victor </p>
                    <p>8007, Australia.</p>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Contact;