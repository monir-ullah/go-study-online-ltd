// This is use for importing Components and CSS style
import React from 'react';
import './ServiceMainPageItem.css';
import Rating from 'react-rating';

const ServiceMainPageItem = (props) => {
    // This is use for Object Distructuring . Data Taken from Fake DataBase
    const {title, image, rating,author, hours, price} = props.item;
    return (
        // This is card of the coruse section
        <div className="shadow ">
            {/* This is course image */}
            
                <img  class="card-img-top" src={image} alt="" />
            <div class="card">

                {/* This is Course Body with the Proper information  */}
                <div class="card-body">
                    <h6><small> Author : {author}</small></h6>
                <h5 class="card-title">{title}</h5>

                {/* This is use for Rating . This component use form react rating */}
                <Rating 
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly	
                initialRating={rating}
                />
                {/* This section use for price and hours */}
                <div className="line-in-course d-flex justify-content-between mt-2"> 
                    <p> <i class="far fa-clock"></i> <span className="span-margin">{hours}</span></p>
                    <h6>Price : {price}</h6>
                </div>

                </div>
            </div>
            </div>
       
    );
};

export default ServiceMainPageItem;