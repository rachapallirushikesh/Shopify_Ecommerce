import React from "react";
import {Link} from 'react-router-dom';

export default function KidsCard(props){
    return(
        <>
            {(props.category==="kid")&&(<div className="mard">
        <div id="mard">
        <Link to={`/Product/${props.id}`}><img src={props.img} alt="img" /></Link>
        <p>{props.name}</p>
        </div>
        <div className="mard-in">
        <span style={{fontWeight:'bold'}}>${props.oldPrice}</span>
        <span  style={{fontWeight:'100',textDecoration:'line-through'}}>${props.newPrice}</span>
        </div>
    </div>)}
        </>
    );
}