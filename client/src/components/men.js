import React from 'react';
import Banner from './men/bannner';
import MensCategory from './men/mensCategory';
import Explore from './explore.js';
import Footer from './footer';
import './collections.css';

export default function Men(){
    return(
        <>
            <hr></hr>
            <Banner />
            <MensCategory />
            <Explore />
            <Footer />
        </>
    );
}