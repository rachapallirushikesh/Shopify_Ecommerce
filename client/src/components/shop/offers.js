import React from "react";
import './offers.css';

export default function Offers(){
    return(
        <div id="offer">
            <div className="offers">
                <div>
                    <h2>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h2>
                    <p>Subscribe to our newsletter and stay updated.</p>
                </div>
                <div style={{display:'flex'}}>
                    <input type="email" placeholder="Your email id" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
}