// This is use for importing Components and CSS style
import React from 'react';
import './ServicesItem1.css';
import Rating from 'react-rating'

const ServicesItem1 = (props) => {
    const {title, image, rating,author, hours, price} = props.item;
    return (
        // This section use for card. Shows top course info. in the main page.
        <div className="shadow ">
            
                <img  class="card-img-top" src={image} alt="" />
            <div class="card">
                {/* This course body */}
                
                <div class="card-body">
                    <h6><small> Author : {author}</small></h6>
                <h5 class="card-title">{title}</h5>

                {/* This is Rating . Use from React Rating */}
                <Rating 
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly	
                initialRating={rating}
                />

                {/* This section use for hour and price in the main page */}
                <div className="line-in-course d-flex justify-content-between mt-2"> 
                    <p> <i class="far fa-clock"></i> <span className="span-margin">{hours}</span></p>
                    <h6>Price : {price}</h6>
                </div>

                </div>
            </div>
            </div>
       
    );
};

export default ServicesItem1;