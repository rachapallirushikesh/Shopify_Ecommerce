import React from 'react';
import Card from './card.js';
import data from '../../Assets/data.js';
import './popular.css';

export default function Popular(props){
    return (
        <div className='popular'>
            <h2>POPULAR IN WOMEN</h2>
            <div className='p'><span>1</span></div>
            <div className='map'>
                {data.map((item)=>{
                    return <Card id={item.id} name={item.name} img={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>
        </div>
    );
}