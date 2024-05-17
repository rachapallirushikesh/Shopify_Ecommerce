import React from "react";
import {Link} from 'react-router-dom';

export default function Explore(){
    return(
        <div className="explore">
            <span><Link to='/' style={{textDecoration:'none',color:'white'}}>Explore</Link></span>
        </div>
    );
}