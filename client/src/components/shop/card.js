import React from "react";
import {Link} from 'react-router-dom';

export default function Card(props){
    return(
        <div className="card">
            <div id="card">
            <Link to={`/Product/${props.id}`}><img src={props.img} alt="img" /></Link>
            <p>{props.name}</p>
            </div>
            
            <div className="card-in">
            <span style={{fontWeight:'bold'}}>${props.oldPrice}</span>
            <span  style={{fontWeight:'100',textDecoration:'line-through'}}>${props.newPrice}</span>
            </div>
        </div>
    );
}