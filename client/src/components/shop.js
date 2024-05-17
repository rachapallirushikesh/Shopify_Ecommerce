import React from 'react';
import Ban from './shop/ban.js';
import Popular from './shop/popular.js';
import Exclusive from './shop/exclusive.js';
import Collection from './shop/collection.js';
import Offers from './shop/offers.js';
import Footer from './footer.js';

export default function Shop(){
    return (<>
        <Ban />
        <Popular />
        <Exclusive />
        <Collection />
        <Offers />
        <Footer />
    </>);
}