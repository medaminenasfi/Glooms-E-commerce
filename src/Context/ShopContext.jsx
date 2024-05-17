import React, { createContext, useState } from "react";
import all_products from "../Component/assest/all_product";

export const ShopContext = createContext({ all_products: [] });

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        // Use product ID as key
        cart[all_products[index].id] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        // console.log(cartItems); // Comment or remove this line for production.
    }

    const removeFromCart = (itemId) => { // Renamed for consistency
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] > 0 ? prev[itemId] - 1 : 0) }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount; // Moved this line outside the for loop
    }
   
      

     const getTotalCartItems =() =>{
        let totalItem = 0;
        for (const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        totalItem += cartItems[item];
                    }
            }
            return totalItem;
     }



    const contextValue = { getTotalCartItems,getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
