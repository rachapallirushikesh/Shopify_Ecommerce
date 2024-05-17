import React,{useEffect,useState,useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import traly from '../images/cart_icon.png';
import logo from '../images/logo.png';
// import axios from 'axios';
// import Cart from './cart';
import './nav.css';

import { store } from "./context/userContext";

export default function Nav(){
   
    const {cartNumber,setCartNumber,log,setLog} = useContext(store);
    // localStorage.setItem('cartNumber',cartNumber)

    const navigate = useNavigate();

    const [tokenExists, setTokenExists] = useState(!!localStorage.getItem('x-token'));


    useEffect(() => {
        let timeout;

        function handleActivity() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                localStorage.removeItem('x-token');
                setLog(false);
                setTokenExists(false);
                navigate('/shop'); // Optionally, redirect to shop after logout
            }, 10 * 60 * 1000); // 10 minutes in milliseconds
        }

        handleActivity(); // Initialize timeout on component mount

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('mousedown', handleActivity);
        window.addEventListener('keypress', handleActivity);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('mousedown', handleActivity);
            window.removeEventListener('keypress', handleActivity);
        };
    }, []);

    function handleLogin(){
        navigate('/login');
    }
    
    function handleLogout(){
        localStorage.removeItem('x-token');
        setCartNumber(0);
        setLog(true);
        navigate('/shop');
    }

    function handleCart(){
        
    }

    return (
        <div className='nav-main'>
            <div className='nav-left'>
                <img alt="logo" src={logo} />
                <h1 style={{color:'black'}}>SHOPIFY</h1>
            </div>
            <div className='nav-center'>
                <ul>
                    <li><Link to='/' className='link'>Shop</Link></li>
                    <li><Link to='/Men' className='link'>Men</Link></li>
                    <li><Link to='/Women' className='link'>Women</Link></li>
                    <li><Link to='/Kids' className='link'>Kids</Link></li>
                </ul>
            </div>
            <div className='nav-right'>
                {localStorage.getItem('x-token')?<div style={{border:"2px solid black"}}><Link to='/' onClick={handleLogout} style={{textDecoration:"none",color:"black"}}>logout</Link></div>:
                <div style={{border:"2px solid black"}}><Link to='/Login' onClick={handleLogin} style={{textDecoration:"none",color:"black"}}>login</Link></div>}
                <img alt='logo' src={traly} onClick={handleCart}/>
                <p>{log? 0 : cartNumber}</p>
            </div>
        </div>
    );
}