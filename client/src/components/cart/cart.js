import React,{useContext,useState} from "react";
import { store } from "../context/userContext";
import './cart.css';

function DesignCart(props){
    const {cartData,setCartData,setProceed,setLog} = useContext(store);    
    // const [key,setKey] = useState(null);

    const [factor,setFactor] = useState(1);
    
    function handleChange(event){
        const {value} = event.target;
        // setKey(key);
        setFactor(value);
    }

    function handleCross(itemKey){
        console.log(cartData);
        console.log(itemKey);
        const updatedCartData = cartData.filter(item => item.key !== itemKey);
        // Update the cartData state with the updated array

        setCartData(updatedCartData);
        if(updatedCartData.length === 0){
            setProceed(false);
            setLog(false);
        }
        console.log(updatedCartData);
    }

    return(
        <>
            <div className="cart-main-bottom">
                <div className="cart-out-left">
                    <div className="cart-img"><img src={props.img} alt="image" /></div>
                    <p>{props.name}</p>
                </div>
                <div className="cart-out-right">
                    <p1>${props.price}</p1>
                    <input id="cart-input" name="multiple" value={factor} onChange={handleChange}/>
                    <p1>${factor*props.price}</p1>
                    <button onClick={() => handleCross(props.itemKey)} style={{border:'0px',fontSize:'25px',backgroundColor:'white'}}>x</button>
                </div>
            </div>
            <hr></hr>
        </>
    );
}

export default function Cart(){
    const {cartData,log,proceed} = useContext(store);
    
    function handleOrder(){
        if(log) alert('Order Received');
        else alert('Please login to order');
    }

    return(
        <>
            <hr></hr>
            <div style={{padding:'4rem 8rem'}}>
                {log?<>
                    <div className="cart-main">
                    <div className="cart-in-left">
                        <p>Products</p>
                        <p>Title</p>
                    </div>
                    <div className="cart-in-right">
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                </div>
                <hr></hr>
                <div>
                    {cartData.map((data)=>{
                        return <DesignCart key={data.key} itemKey={data.key} img={data.img} name={data.name} price={data.new_price} />
                    })}
                    <div style={{marginTop:'2rem'}}>
                    {!proceed ?
                    <button onClick={handleOrder} 
                    style={{backgroundColor:'red',color:'white',border:'2px solid red',padding:'10px 20px'}}>Proceed to Checkout</button>
                    
                    :<p>Hello</p>}
                    
                </div>
                </div>
                </>:<div style={{textAlign:'center'}}><h1>No items in the cart</h1></div>}
            </div>
        </>
        
    );
}