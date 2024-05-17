import React from "react";
import MenCard from "./menCard.js";
import data from '../../Assets/all_product.js';

export default function MensCategory(){
    return(
        <div className="pop">
            <div className="category">
                <p style={{display:'flex',gap:'10px'}}><p style={{fontWeight:'600'}}>Showing 1 - 12</p>out of 54 products</p>
                <button>Sort by <i class="fa-solid fa-angle-down"></i> </button>
            </div>
            <div className='pap'>
                {data.map((item)=>{
                    return <MenCard id={item.id} category={item.category} name={item.name} img={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                })}
            </div>
            {/* <div style={{textAlign:'center',margin:'5rem'}}><span id="span">Explore More</span></div> */}
        </div>
    );
}