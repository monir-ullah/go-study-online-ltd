import React from 'react';
import { Container,Navbar,Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import './Navr.css'
import logo from '../../gostudy-logo-dark logo-min.png'

const Navr = () => {
    return (
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
            
            <Nav className="nav-link ">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/sponsors">Sponsors</NavLink>
            </Nav>
            
           
            </Container>
            </Navbar>
            
        </div>
    );
};

export default Navr;