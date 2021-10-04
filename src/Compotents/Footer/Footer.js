import React from 'react';
import './Footer.css'
import {Nav } from "react-bootstrap";
import {  Link } from 'react-router-dom'
import ftLogo from '../../Images/Footer-logo.png'

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="d-flex container ft-sec-with-padding ">
                <div className="ft-logo col-3">
                    <img src={ftLogo} alt="" />
                    <p>
                    Great lesson ideas and lesson plans for ESL teachers! <br/>Educators can customize lesson plans to best
                    <br/>Education featured by Learning Management System (LMS) for online education.
                    </p>
                </div>
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
                <div className="col-3 ft-nav-margin">
                   
                </div>
            </div>
            <div className="copywright-info container">
               <p> © 2022 GoStudy, All Rights Reserved. Design By Monir Ullah</p>
            </div>
        </div>
    );
};

export default Footer;