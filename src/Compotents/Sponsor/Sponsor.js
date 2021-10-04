import React from 'react';
import img from '../../Images/Sponsor.png';
import './Sponsor.css'

const Sponsor = () => {
    return (
        <div>
            <div className="sponsor-magring">
                <img src={img} alt="" className="w-80"/>
            </div>
        </div>
    );
};

export default Sponsor;