import React, { useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import Home from './Pages/Home/Home'
import ComponentsExamples from './Pages/Examples/ComponentsExamples'
import Review from './Pages/Review/Review'
import Payment from './Pages/Payment/Payment'
import Products from './Pages/Products/Products'
import Category from './Pages/Category/Category'

export default function App(){

    /*Itens do carrinho */
    let [cart, setCart] = useState([])

    let localCart = localStorage.getItem("cart")

    const addItem = (item) => {
        //create a copy of our cart state, avoid overwritting existing state
        let cartCopy = [...cart];
        
        //assuming we have an ID field in our item
        let {ID} = item;
        
        //look for item in cart array
        let existingItem = cartCopy.find(cartItem => cartItem.ID == ID);
        
        //if item already exists
        if (existingItem) {
            existingItem.quantity += item.quantity //update item
        } else { //if item doesn't exist, simply add it
            cartCopy.push(item)
        }
        
        //update app state
        setCart(cartCopy)
        
        //make cart a string and store in local space
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart)
    }

    const editItem = (itemID, amount) => {
  
        let cartCopy = [...cart]
        
        //find if item exists, just in case
        let existentItem = cartCopy.find(item => item.ID == itemID);
        
        //if it doesnt exist simply return
        if (!existentItem) return
        
        //continue and update quantity
        existentItem.quantity += amount;
        
        //validate result
        if (existentItem.quantity <= 0) {
          //remove item  by filtering it from cart array
          cartCopy = cartCopy.filter(item => item.ID != itemID)
        }
        
        //again, update state and localState
        setCart(cartCopy);
        
        let cartString = JSON.stringify(cartCopy);
        localStorage.setItem('cart', cartString);
    }

    const removeItem = (itemID) => {
        debugger
        //create cartCopy
        let cartCopy = [...cart]
        
        cartCopy = cartCopy.filter(item => item.ID != itemID);
        
        //update state and local
        setCart(cartCopy);
        
        let cartString = JSON.stringify(cartCopy)
        localStorage.setItem('cart', cartString)
    }

    const emptyCart = () => {
        setCart([])
        localStorage.setItem('cart', '[]')
    }
    
    return(
        <Routes>
            <Route path="/examples" element={<ComponentsExamples cart={localCart}
                                                                 addItemToCart={addItem}
                                                                 editCartItem={editItem}
                                                                 removeItemFromCart={removeItem}
                                                                 emptyCart={emptyCart}/>} />

            <Route path="/" element={<Home emptyCart={emptyCart}/>} />

            <Route path="/payment" element={<Payment cart={localCart}
                                                     emptyCart={emptyCart}/>} />

            <Route path="/review" element={<Review  cart={localCart}
                                                    addItemToCart={addItem}
                                                    editCartItem={editItem}
                                                    removeItemFromCart={removeItem}
                                                    emptyCart={emptyCart}/>} />

            <Route path="/products" element={<Products  cart={localCart}
                                                        addItemToCart={addItem}
                                                        emptyCart={emptyCart} />} />

            <Route path="/category" element={<Category  emptyCart={emptyCart}/>} />
        </Routes>
    )
}