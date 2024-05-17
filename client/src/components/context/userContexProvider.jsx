import React,{useState} from "react";
import { store } from "./userContext";

const UserContextProvider = ({children})=>{

    const [cartNumber,setCartNumber] = useState(0);
    const [log,setLog] = useState(null);
    const [cartData,setCartData] = useState([]);

    return(
        <store.Provider value={{cartNumber,setCartNumber,log,setLog}}>
            {children}
        </store.Provider>
    );
}

export default UserContextProvider;