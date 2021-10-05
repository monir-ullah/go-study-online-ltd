// This is use for importing Components and CSS style
import React from 'react';
import { Container,Navbar,Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import './Navr.css'
import logo from '../../gostudy-logo-dark logo-min.png'

const Navr = () => {
    return (
        // This whole secion will seen in the all pages.
        <div >
             <Navbar  className="me-auto">
            <Container>
            <Navbar.Brand>
            <img
            alt=""
            src={logo}
            width="200"
            className="d-inline-block align-top"
            />
            </Navbar.Brand>
            
            {/* This is use for change page or visit one page to another page (link) */}
            <Nav className="nav-link ">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/sponsors">Sponsors</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            </Nav>
            
           
            </Container>
            </Navbar>
            
        </div>
    );
};

export default Navr;