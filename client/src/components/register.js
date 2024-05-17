import React from 'react';
import { useNavigate,Link} from 'react-router-dom';
import axios from 'axios';


export default function Register(){
    
    const navigate = useNavigate();
    function handleClickHere(){
        navigate('/Login')
    }

    
    const [email,setEmail] = React.useState('');
    const [number,setNumber] = React.useState('');
    const [player,setPlayer] = React.useState('');
    const [password,setPassword] = React.useState('');
    function handleEmail(event){
        const {name,value}=event.target;
        if(name==='input1'){
            setEmail(value);
        }
        else if(name==='input2'){
            setNumber(value);
        }
        else if(name==='input3'){
            setPlayer(value);
        }
        else if(name==='input4'){
            setPassword(value);
        }
    }

    const [message,setMessage] = React.useState();
    
    function handleClick(){
        const emailRegex = /^([a-zA-Z0-9/.]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
        if(!emailRegex.test(email)){
            setMessage('Enter valid details');
            return ;
        }
       
        
        axios.post("https://shopify-ecommerce-ftg8.onrender.com/customerData",{email,number,player,password})
             .then(res=>navigate('/login'))
             .catch(()=>console.log('Server error'));
       

    }
    

    return (
        <div className='reg'>
            <div className='reg-in'>
                <p style={{fontSize:'20px',color:'red',textAlign:'center'}}>{message}</p>
                <p>Sign up</p>
                <input id='email' onChange={handleEmail} type='email' placeholder='Email address' value={email} name='input1'/><br></br>
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m1}</p> */}
                <input id='email' onChange={handleEmail} type='password' placeholder='Contact number' value={number}name='input2'/><br></br>
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m2}</p> */}
                <input id='email' onChange={handleEmail} type='password' placeholder='Name' value={player} name='input3'/><br></br>
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m3}</p> */}
                <input id='email' onChange={handleEmail} type='password' placeholder='Password' value={password} name='input4'/>
                {/* <p style={{color:'red',fontSize:'10px',textAlign:'center'}}>{message.m4}</p> */}
                <div className='continue' onClick={handleClick}>Register</div>
                <span>Already had an account?</span>
                <span><Link to='/Login' style={{color:'red',textDecoration:'none'}} onClick={handleClickHere}> Click here</Link></span>
                <div style={{marginTop:'.5rem',marginBottom:'2rem'}}> 
                    <input type='checkbox'></input> 
                    <span style={{fontSize:'13px'}}>I agree to the terms of use & privacy policy.</span>
                </div>
            </div>
        </div>
    );
}