// This is use for importing Components and CSS style
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Services.css'
import ServicesItem1 from './ServicesItem1/ServicesItem1';
const Services1 = () => {
    // This is use for seting data using useState
    const [serviceOne, setServiceOne] = useState([]);
    useEffect( () => {
        // This is use for taking data from fake DB
        fetch('./fakeDBServiceHome.JSON')
        .then(res => res.json())
        .then(data => setServiceOne(data))
    },[])
    return (
        <div>
            {/* This section use for top courses in the home page.  */}
             <h2>TOP COURSES</h2>
            <div class="d-flex gap-4 mb-5 mt-3">

            {/* This is use for map.That will give info of the course*/}
               
            { 
                serviceOne.map(item => <ServicesItem1
                item={item}
                key={item.id}
                ></ServicesItem1>)
            }
            </div>
            
        </div>
    );
};

export default Services1;