import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import CleanOrderButton from '../../components/CleanOrderButton/CleanOrderButton';
import PayButton from '../../components/PayButton/PayButton';
import CategoryButton from '../../components/CategoryButton/CategoryButton'

import './Category.css'

export default function Category(props){

    const navigate = useNavigate()

    const navigateToReview = () => {
        navigate('/review')
    }

    const navigateToProducts = (category) => {
        navigate('/products', {state:{category}})
    }



    return(
        <div className='d-flex row w-100'>
            {/* Setor das categorias */}
            <div className='d-flex row w-100'
                style={{height: '82vh', margin: '1px'}}>
                {/* Coluna 1 de categorias */}
                <div className='d-flex col-6 justify-content-between align-items-center flex-column'>
                    <div className='d-flex w-100 row'>
                        <CategoryButton imageName='Vetor_Combo.png' 
                                        category='Combos' 
                                        redirect={navigateToProducts}/>
                    </div>
                    <div className='d-flex row w-100'>
                        <CategoryButton imageName='Vetor_Lanche.png' 
                                        category='Lanches' 
                                        redirect={navigateToProducts}/>
                    </div>
                </div>
                {/* Coluna 2 de categorias */}
                <div className='d-flex col-6 justify-content-between align-items-center flex-column'>
                    <div className='d-flex w-100 row'>
                        <CategoryButton imageName='Vetor_Bebida.png' 
                                        category='Bebidas' 
                                        redirect={navigateToProducts}/>
                    </div>
                    <div className='d-flex row w-100'>
                        <CategoryButton imageName='Vetor_Sorvete.png' 
                                        category='Sobremesas' 
                                        redirect={navigateToProducts}/>
                    </div>
                </div>     
            </div>
            {/* Setor dos botões limpar Carrinho e Pagar */}
            <div className='d-flex row w-100'
                style={{height: '14vh', margin:'1px'}}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex col-6'>
                        <CleanOrderButton emptyCart={props.emptyCart}/>
                    </div>
                    <div className='d-flex col-6'>
                        <PayButton redirectFunction={navigateToReview}/>
                    </div>
                </div>
            </div>
        </div>
    )
}