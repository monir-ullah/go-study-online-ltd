// This is use for importing Components and CSS style
import React from 'react';
import img from '../../Images/page-not-found-404.jpeg';
const PageNotFound = () => {
    return (
        <div className="not-found-404">
            <img src={img} alt="" className="w-100" />
        </div>
    );
};

export default PageNotFound;