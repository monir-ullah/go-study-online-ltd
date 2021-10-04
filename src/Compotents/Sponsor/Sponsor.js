// This is use for importing Components and CSS style
import React from 'react';
import img from '../../Images/Sponsor.png';
import './Sponsor.css'

const Sponsor = () => {
    return (
        // This is use for Sponsor Page/ Section
        <div>
            <div className="sponsor-magring">
                <img src={img} alt="" className="w-80"/>
            </div>
        </div>
    );
};

export default Sponsor;