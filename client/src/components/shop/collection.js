import React from 'react';
import CollectionCard from './collectionCard.js';
import data from '../../Assets/new_collections.js';
import './collection.css';

export default function Collection(props){
    return (
        <div className='ppopular'>
            <h2>NEW COLLECTIONS</h2>
            <div className='p'><span>1</span></div>
            <div className='mmap'>
                {data.map((item)=>{
                    return <CollectionCard id={item.id} name={item.name} img={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>
        </div>
    );
}