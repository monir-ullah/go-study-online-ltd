import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './MainServicePage.css'
import ServiceMainPageItem from './ServiceMainPageItem/ServiceMainPageItem';

const MainServicePage = () => {
    // This is for seting data using map
    const [mainServicePageItem, setMainServicePageItem] = useState([]);
    useEffect( () => {
        // This useEffect Use for taking data from fake DB
        fetch('./fakeDBServiceHome-1.JSON')
        .then(res => res.json())
        .then(data => setMainServicePageItem(data))
    },[])
    return (
        <div >
            {/* This Section is for All course Data */}
            <h2 className="d-padding">All COURSES</h2>
            <div class="d-grid gap-4 mb-5 mt-3 ">
               
            {
                mainServicePageItem.map(item => <ServiceMainPageItem
                item={item}
                key={item.id}
                ></ServiceMainPageItem>)
            }
            </div>              
        </div>
    );
};

export default MainServicePage;