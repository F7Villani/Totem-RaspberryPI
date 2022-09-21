import React from 'react';

import { CategoryButton } from './components/CategoryButton';
import { Counter } from './components/Counter';


const App = () => {
    return(
        <div>            
            <CategoryButton imageName='Vetor_Combo.png' category='Combos'/>
            <Counter/>
        </div>
    )
}

export default App