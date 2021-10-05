// This is use for importing Components and CSS style
import React from 'react';
import './About.css'
import img from '../../Images/Header-Photo-min.png';

const About = () => {
    return (
        // This Component or Page is use for About Page
        <div className="d-flex d-grid m-5">
            <div className="col-7">
                <img src={img} alt=""  className="img-fluid"/>
            </div>
            <div>
                <h1>Achieve Your Goals With Educal</h1>
                <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                <p> <i class="fas fa-check"></i> <strong>Upskill your organization.</strong></p>
                <p> <i class="fas fa-check"></i>  <strong>Access more then 100K online courses.</strong></p>
                <p> <i class="fas fa-check"></i>  <strong>Learn the latest skills.</strong></p>

                <p>Shiron – Insurance Elementor Template Kit is specially designed for Insurance, Finance, Marketing, Consulting as well as financial and law companies, individual tax, finance advisors.This kit has been optimized for use with the free Hello Elementor theme but may be used with most themes that support Elementor.</p>
            </div>
        </div>
    );
};

export default About;