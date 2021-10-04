// This is use for importing Components and CSS style
import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        // This is for Contact Page
        <div className="shadow-custom">
             <h3>Contact Us</h3>
                    <div>
                    <p><i class="fas fa-street-view"></i> <span className="span-margin">PO Box 16122 Collins Street West Victoria 8007 Australia</span></p>
                    <p><i class="fas fa-phone-alt"></i> <span className="span-margin"> +91 458 654 528</span></p>
                    <p><i class="fas fa-envelope"></i> <span className="span-margin">gostudy@gmail.com</span></p>
                    </div>
        </div>
    );
};

export default Contact;