// This is use for importing Components and CSS style
import React from 'react';
import './Footer.css'
import {Nav } from "react-bootstrap";
import {  Link } from 'react-router-dom'
import ftLogo from '../../Images/Footer-logo.png'

const Footer = () => {
    return (
        // This is use for Footer Section. Will availabile in the all pages
        <div className="footer-area">
            <div className="d-flex container ft-sec-with-padding ">
                {/* This is footer Fisrt Column use logo and text  */}
                <div className="ft-logo col-3">
                    <img src={ftLogo} alt="" />
                    <p>
                    Great lesson ideas and lesson plans for ESL teachers! <br/>Educators can customize lesson plans to best
                    <br/>Education featured by Learning Management System (LMS) for online education.
                    </p>
                </div>
                {/* This is footer 2nd Column use Nav with Route  */}
                <div className="footer-nav ft-nav-margin col-3">
                    <h3>Company</h3>
                    <Nav className="nav-link-footeer">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li> <Link to="/sponsors">Sponsors</Link></li>
            </ul> </Nav>
                </div>

                {/* This is footer 3rd Column use Nav with Route (Platform Section) */}
                <div className="footer-nav ft-nav-margin col-3">
                    <h3>Platform</h3>
                    <Nav className="nav-link-footeer">
            <ul>
                <li><Link to="/home">Brower Library</Link></li>
                <li><Link to="/services">Library</Link></li>
                <li> <Link to="/about">Partners</Link></li>
                <li><Link to="/contact">FAQs</Link></li>
                <li> <Link to="/sponsors">Tutorials</Link></li>
            </ul> </Nav>
                </div>

                {/* This is footer 4rd Column use Contact Section */}
                <div className="col-3 ft-nav-margin">
                <h3>Contact Us</h3>
                    <div>
                    <p><i class="fas fa-street-view"></i> <span className="span-margin">16122 Collins Street West Victoria 8007</span></p>
                    <p><i class="fas fa-phone-alt"></i> <span className="span-margin"> +91 458 654 528</span></p>
                    <p><i class="fas fa-envelope"></i> <span className="span-margin">gostudy@gmail.com</span></p>
                    </div>
                </div>
            </div>
            {/* This Section use for Copywrigt info/alert */}
            <div className="copywright-info container">
               <p> © 2022 GoStudy, All Rights Reserved. Design By Monir Ullah</p>
            </div>
        </div>
    );
};

export default Footer;