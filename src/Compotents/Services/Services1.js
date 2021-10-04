import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Services.css'
import ServicesItem1 from './ServicesItem1/ServicesItem1';
const Services1 = () => {
    const [serviceOne, setServiceOne] = useState([]);
    useEffect( () => {
        fetch('./fakeDBServiceHome.JSON')
        .then(res => res.json())
        .then(data => setServiceOne(data))
    },[])
    return (
        <div>
             <h2>TOP COURSES</h2>
            <div class="d-flex gap-4 mb-5 mt-3">
               
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