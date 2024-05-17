import React from "react";
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <div>
            <div style={{display:'flex',justifyContent:"center",alignItems:'center',gap:'15px'}}>
            <img alt="logo" src={logo} />
            <h1 style={{color:'black'}}>SHOPIFY</h1>
            </div>
            <ul style={{display:'flex',listStyleType:'none',justifyContent:'center',gap:'30px',fontSize:'20px',marginTop:'2rem'}}>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}>Company</Link></li>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}>Products</Link></li>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}>Offices</Link></li>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}>About</Link></li>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}>Contact</Link></li>
            </ul>
            <ul style={{display:'flex',listStyleType:'none',justifyContent:'center',gap:'30px',fontSize:'20px',marginTop:'2rem',marginBottom:'2rem'}}>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-instagram"></i></Link></li>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-twitter"></i></Link></li>
                <li><Link to='/' style={{textDecoration:'none',color:'black'}}><i class="fa-brands fa-whatsapp"></i></Link></li>
            </ul>
            <hr style={{width:'80%',margin:'auto'}}></hr>
            <p style={{textAlign:'center',marginTop:'1.5rem',marginBottom:'1.5rem'}}>Copyright @2023 - All Right Reserved</p>
        </div>
    );
}