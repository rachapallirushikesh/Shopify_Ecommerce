import React from 'react';
import Ben from './kids/ben.js';
import KidsCategory from './kids/kidCategory.js';
import Explore from './explore.js';
import Footer from './footer';
import './collections.css';

export default function Kid(){
    return(
        <>
            <hr></hr>
            <Ben />
            <KidsCategory />
            <Explore />
            <Footer />
        </>
    );
}