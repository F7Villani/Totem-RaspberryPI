import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

import CategoryButton from '../../components/CategoryButton/CategoryButton';
import CleanOrderButton from '../../components/CleanOrderButton/CleanOrderButton';
import PayButton from '../../components/PayButton/PayButton';
import CardItemSelect from '../../components/CardItemSelect/CardItemSelect';

export default function ComponentsExamples(props){
    const navigate = useNavigate();
    const navigateToReview = () => {
        navigate('/review')
    }
    return (
        <div>     
            <h1>Titulo</h1>       
            <CategoryButton imageName='Vetor_Combo.png' category='Combos' onClick={() =>{
                console.log("Fui passado pelo props!!!")
            }}/>
  
            <CardItemSelect itemName='Combo 1' price='30,9' imageName='Vetor_Sorvete.png' />
            <CardItemSelect itemName='Combo 1' price='30,9' imageName='Vetor_Sorvete.png' />
            <CardItemSelect itemName='Combo 1' price='30,9' imageName='Vetor_Sorvete.png' />
            <CleanOrderButton amountItems='5'/>
            <PayButton redirectFunction={navigateToReview}/>
        </div>
    )
}