import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import Home from './Pages/Home'
import SelectCategory from './Pages/SelectCategory'

const App = () => {
    return(
        <Routes>
            <Route path="/category" element={<SelectCategory />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default App