import React,{useContext} from "react";
import all_products from "../Assets/all_product";
import {useParams} from 'react-router-dom';
import logo from '../Assets/star_icon.png';
import logo_dull from '../Assets/star_dull_icon.png';
import axios from 'axios';

import { store } from "./context/userContext";

export default function Products(){
    const {cartNumber,setCartNumber,cartData,setCartData,setLog} = useContext(store);
    // const navigate = useNavigate();
    const { id } = useParams();
    const productId = Number(id); // Ensure id is converted to a number
    const answer = all_products.find((product) => product.id === productId);
    const clientToken = localStorage.getItem('x-token');
    console.log(clientToken);

    function handleOnClick(){
        try{
            axios.post('http://localhost:7000/saveCustomerData',{
            key:productId,
            name:answer.name,
            img:answer.image,
            old_price:answer.old_price,
            new_price:answer.new_price,
            category:answer.category},{
            headers: {
                'x-token':clientToken
            }})
            .then((res)=>{
                alert(res.data.message);
                if(res.data.bool){
                    const productData = {
                        key:productId,
                        img:answer.image,
                        name:answer.name,
                        new_price:answer.new_price,
                        category:answer.category
                    }
                    setCartData([...cartData,productData]);
                    setCartNumber(cartNumber+1);
                    setLog(true);

                    console.log('succesfully saved');
                }
            })
            .catch((err)=>{
                alert('Not saved in the cart')
                console.log(err)});
        }
        catch(err){
            alert('not saved in the cart');
        }
    }

    return(
        
            <div className="products">
                <div className="small-pic">
                    <img src={answer.image} alt="/" />
                    <img src={answer.image} alt="/" />
                    <img src={answer.image} alt="/" />
                    <img src={answer.image} alt="/" />
                </div>
                <div className="large-pic">
                    <img src={answer.image} alt="/" />
                </div>
                <div className="right">
                    <h2 className="title">{answer.name}</h2>
                    <div className="stars">
                        <img src={logo} alt="/" />
                        <img src={logo} alt="/" />
                        <img src={logo} alt="/" />
                        <img src={logo} alt="/" />
                        <img src={logo_dull} alt="/" />
                        <p>(122)</p>
                    </div>
                    <div className="prices">
                        <p1>${answer.old_price}</p1>
                        <p>${answer.new_price}</p>
                    </div>
                    <p className="text">A light weight, usually knitted, pull over shirt, close fitting and with a round neck line and short sleeves, worn as an undershirt or outer garmet.</p>
                    <div className="sizes">
                        <p>Select Size</p>
                        <div className="box">
                            <p1>S</p1>
                            <p1>M</p1>
                            <p1>L</p1>
                            <p1>XL</p1>
                            <p1>XXL</p1>
                        </div>
                    </div>
                    <button className="cart-button" onClick={handleOnClick}>ADD TO CART</button>
                    <div className="bottom-end">
                        <p2><span style={{fontWeight:'bold'}}>Category: </span>{answer.category}</p2>
                        <p2><span style={{fontWeight:'bold'}}>Tags: </span>Modern, Latest</p2>
                    </div>
                </div>
            </div>
       
    );
}