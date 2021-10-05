// This is use for importing Components and CSS style
import React from 'react';
import img from '../../Images/Sponsor.png';
import './Sponsor.css'

const Sponsor = () => {
    return (
        // This is use for Sponsor Page/ Section
        <div>
            <div className="sponsor-magring">
                <h2>Trusted by 100 world's best companies</h2>
                <img src={img} alt="" className="w-80 img-fluid"/>
            </div>
        </div>
    );
};

export default Sponsor;