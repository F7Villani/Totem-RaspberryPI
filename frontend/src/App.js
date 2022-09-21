import React from 'react';

import { CategoryButton } from './components/CategoryButton';
import { Counter } from './components/Counter/Counter';
import { CleanOrderButton} from './components/CleanOrderButton/CleanOrderButton'


const App = () => {
    return(
        <div>            
            <CategoryButton imageName='Vetor_Combo.png' category='Combos'/>
            <Counter/>
            <CleanOrderButton amountItems='5'/>
        </div>
    )
}

export default App