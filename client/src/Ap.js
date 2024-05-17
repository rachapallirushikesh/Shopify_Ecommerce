import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Nav from './components/nav.js';
import Auth from './components/Auth.js';
import Shop from './components/shop.js';
import Men from './components/men.js';
import Women from './components/Women.js';
import Kids from './components/kids.js';
import Register from './components/register.js';
import Products from './components/product.js';
import UserContextProvider from './components/context/userContexProvider.jsx';

export default function Ap(){
    return (
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<><Nav /><Shop /></>} />
                <Route path='/Men' element={<><Nav /><Men /></>} />
                <Route path='/Women' element={<><Nav /><Women /></>} />
                <Route path='/kids' element={<><Nav /><Kids /></>} />
                <Route path='/login' element={<><Nav /><Auth /></>} />
                <Route path='/Register' element={<><Nav /><Register /></>} />
                <Route path='/Product/:id' element={<><Nav /><Products /></>} />
                {/* <Route path='/cart' element={<><Nav /><Cart /></>} /> */}
                {/* Add a default route for unmatched paths */}
                {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </UserContextProvider>
        
    );
}

// function NotFound() {
//     return <h1 style={{textAlign:'center',marginTop:'3rem'}}>404 - Not Found</h1>;
// }