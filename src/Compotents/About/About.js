import React from 'react';
import './About.css'
import img from '../../Images/Header-Photo-min.png';

const About = () => {
    return (
        <div className="d-flex d-grid m-5">
            <div className="col-7">
                <img src={img} alt=""  className="img-fluid"/>
            </div>
            <div>
                <h1>Wellcome to Your Big Tech Company</h1>
                <p>Shiron – Insurance Elementor Template Kit is specially designed for Insurance, Finance, Marketing, Consulting as well as financial and law companies, individual tax, finance advisors.This kit has been optimized for use with the free Hello Elementor theme but may be used with most themes that support Elementor.</p>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempore adipisci, recusandae magni consequuntur debitis aliquid maxime harum. Voluptatibus libero sapiente veniam asperiores harum illo quia assumenda mollitia saepe dignissimos!
                    Possimus excepturi ea molestiae quisquam impedit. Animi officia autem ab in magnam asperiores doloremque optio, beatae commodi cupiditate, quis, ex fuga eveniet adipisci quisquam. Distinctio rem hic consectetur sapiente magni!
                </p>

                <p>Shiron – Insurance Elementor Template Kit is specially designed for Insurance, Finance, Marketing, Consulting as well as financial and law companies, individual tax, finance advisors.This kit has been optimized for use with the free Hello Elementor theme but may be used with most themes that support Elementor.</p>
            </div>
        </div>
    );
};

export default About;