import React from 'react';

import { CategoryButton } from './components/CategoryButton';
import { Counter } from './components/Counter/Counter';
import { CleanOrderButton} from './components/CleanOrderButton/CleanOrderButton';
import PayButton from './components/PayButton/PayButton';


const App = () => {
    return(
        <div>            
            <CategoryButton imageName='Vetor_Combo.png' category='Combos'/>
            <Counter/>
            <CleanOrderButton amountItems='5'/>
            <PayButton/>
        </div>
    )
}

export default App