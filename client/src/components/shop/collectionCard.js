import React from "react";
import {Link} from 'react-router-dom';

export default function CollectionCard(props){
    return(
        <div className="ccard">
            <div id="ccard">
            <Link to={`/Product/${props.id}`}><img src={props.img} alt="img" /></Link>
            <p>{props.name}</p>
            </div>
            
            <span className="ccard-in">
            <span style={{fontWeight:'bold'}}>${props.oldPrice}</span>
            <span  style={{fontWeight:'100',textDecoration:'line-through'}}>${props.newPrice}</span>
            </span>
        </div>
    );
}