import React from 'react';
import hand_icon from '../../Assets/hand_icon.png';
import arrow from '../../Assets/arrow.png';
import hero from '../../Assets/hero_image.png';
import './ban.css';

export default function Ban(){
    return(
        <div className='ban'>
            <div className='matter'>
                <h6>NEW ARRIVALS ONLY</h6>
                <div style={{display:'flex',alignItems:'center',gap:'20px',margin:'0'}}>
                <h2 id='new'>new</h2>
                <span><img src={hand_icon} alt='' id='hand'/></span>
                </div>
                <h2 id='new'>collection</h2>
                <h2 id='new'>for everyone</h2>
                <button className='button'>
                    <p>Latest Collection</p>
                    <img src={arrow} alt='' id='arrow'/>
                </button>
            </div>
            <div className='bigImage'>
                <img src={hero} alt='hero' id='hero'/>
            </div>
        </div>
    );
}