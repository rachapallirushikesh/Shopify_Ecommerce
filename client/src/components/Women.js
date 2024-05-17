import React from 'react';
import Bann from './women/bann.js';
import WomenCategory from './women/womensCategory.js';
import Explore from './explore.js';
import Footer from './footer';
import './collections.css';

export default function Women(){
    return(
        <>
            <hr></hr>
            <Bann />
            <WomenCategory />
            <Explore />
            <Footer />
        </>
    );
}