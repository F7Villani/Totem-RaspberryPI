import React, { useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import Home from './Pages/Home/Home'
import ComponentsExamples from './Pages/Examples/ComponentsExamples'
import Review from './Pages/Review/Review'
import Payment from './Pages/Payment/Payment'
import Products from './Pages/Products/Products'
import Category from './Pages/Category/Category'
import { Cart } from './services/Cart';

export default function App(){

    const cart = new Cart();
    
    return(
        <Routes>
            <Route path="/examples" element={<ComponentsExamples cart={cart}/>} />

            <Route path="/" element={<Home cart={cart}/>} />

            <Route path="/payment" element={<Payment cart={cart}/>} />

            <Route path="/review" element={<Review cart={cart}/>} />

            <Route path="/products" element={<Products cart={cart} />} />

            <Route path="/category" element={<Category cart={cart}/>} />
        </Routes>
    )
}