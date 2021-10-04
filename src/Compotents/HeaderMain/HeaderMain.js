// This is use for importing Components and CSS style
import React from 'react';
import './HeaderMain.css';
import { Container, Image } from "react-bootstrap";
import image from '../../Images/Header-Photo-min.png';
import Services1 from '../Services/Services1';
import Sponsor from '../Sponsor/Sponsor';

const HeaderMain = () => {
    return (
        // This is the Main Page of the website.
        <div>
            <div className="header-main-sec-div">
                {/* This for Main Header Headline and Info  */}
            <Container>
            <div className=" d-flex justify-content-between">
            <div className="header-info col-7">
                <h5>Learn & Achieve</h5>
                <h1>Find he right </h1>
                <h1>Online tutor for you.
                </h1>
                <p>Meet university, and cultural institutions, who'll share their experience.
                Start streaming on-demand video lectures today from top level instructors Attention heatmaps
                </p>
                <button className="btn btn-outline-secondary mt-3">Ready To get Started?</button>
            </div>
            {/* This is for Main header Image */}
            <div className="header-img col-5">
            <Image src={image} fluid />
            </div>

            {/* This section is use for Learn New Skill Sec.
            This area attacthed in the bottom of the main header area. */}
            </div>
            <div className="d-flex bg-div-ex rounded-3">
                <div className="d-flex header-sub-sec">
                   <div className="img-icon"><img className ="fluid" src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/04/icon.png" alt="" /></div> 
                   <div>
                       <h4>Learn new skills</h4>
                       <p>With flexible courses</p>
                    </div> 
                </div>
                <div className="d-flex header-sub-sec">
                    <div className="img-icon"><img  className ="fluid" src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/04/icon-2.png" alt="" /></div> 
                    <div>
                    <h4>Learn new skills</h4>
                    <p>With flexible courses</p>
                    </div> 
                </div>
                <div className="d-flex header-sub-sec">
                    <div className="img-icon"><img className ="fluid" src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/04/icon-3.png" alt="" /></div> 
                   <div>
                    <h4>Learn new skills</h4>
                    <p>With flexible courses</p>
                    </div> 
                </div>
            </div>
            </Container>  
        </div>

        {/* This section is use for Serives Area. I Tool in the page as a Top Courses */}
        <div className="container">
        <Services1></Services1>

        {/* This section is use for Sponser Area. In this area i use an image/Screen Shot*/}
        <div className="main-page-sponsor">
        <Sponsor></Sponsor>
        </div>
        </div>
        </div>
    );
};

export default HeaderMain;