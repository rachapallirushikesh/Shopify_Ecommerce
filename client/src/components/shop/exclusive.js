import React from 'react';
import './exclusive.css';
import exclusive from '../../Assets/exclusive_image.png';

export default function Exclusive(){
    return(
        <div className='exclusive'>
            <div id='exclusive'>
                <div className='exclusive-in'>
                <h2>Exclusive</h2>
                <h2>Offers For You</h2>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check now</button>
                </div>
                <div className='exclusive-out'>
                    <img src={exclusive} alt='exclusive' id='exclusive-out' />
                </div>
            </div>
        </div>
    );
}