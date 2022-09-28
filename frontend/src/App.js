import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import Home from './Pages/Home'
import SelectCategory from './Pages/SelectCategory'

export default function App(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-category" element={<SelectCategory />} />
        </Routes>
    )
}