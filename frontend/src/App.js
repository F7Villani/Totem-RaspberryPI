import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import Home from './Pages/Home'
import ComponentsExamples from './Pages/ComponentsExamples'
import Review from './Pages/Review'
import Payment from './Pages/Payment'
import Products from './Pages/Products'
import Category from './Pages/Category'

export default function App(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<ComponentsExamples />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/review" element={<Review />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category" element={<Category />} />
        </Routes>
    )
}