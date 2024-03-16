import React, { createContext, useState } from 'react'
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    
    const[cartItems,setCartItems]=useState(getDefaultCart());
    

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const Removefromcart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {all_product,cartItems,addToCart,Removefromcart};
    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider> // By doing this you give data to all the pages 
    )
}

export default ShopContextProvider;