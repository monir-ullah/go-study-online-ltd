// This is use for importing Components and CSS style
import React from 'react';
import img from '../../Images/page-not-found-404.jpeg';
import {  NavLink } from 'react-router-dom';
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        // This Home Component use for Not Found page
        <div className="not-found-404">
            <img src={img} alt="" className="w-100" />

            {/* This is use for Back to home page. In the not found page */}
            <button className="btn button-to-home"><NavLink to="/home"><strong>Back To Homepage</strong></NavLink></button>
        </div>
    );
};

export default PageNotFound;