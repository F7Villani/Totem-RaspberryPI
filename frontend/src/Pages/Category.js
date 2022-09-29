import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import CleanOrderButton from '../components/CleanOrderButton/CleanOrderButton';
import PayButton from '../components/PayButton/PayButton';
import CategoryButton from '../components/CategoryButton/CategoryButton'

export default function Category(props){

    const navigate = useNavigate()

    const navigateToReview = () => {
        navigate('/review')
    }

    

    return(
        <div className='d-flex w-100 h-100 row'>
            {/* Setor das categorias */}
            <div className='d-flex row w-100'
                style={{height: '80vh', marginTop:'5vh'}}>
                <div className='d-flex col-1'/>
                {/* Coluna 1 de categorias */}
                <div className='d-flex col-5 justify-content-between align-items-center flex-column'>
                    <div className='d-flex w-100 row'>
                        <CategoryButton imageName='Vetor_Combo.png' 
                                        category='Combos' 
                                        onClick={() =>{
                                            
                                        }}/>
                    </div>
                    <div className='d-flex row w-100'>
                        <CategoryButton imageName='Vetor_Lanche.png' 
                                        category='Lanches' 
                                        onClick={() =>{
                                            
                                        }}/>
                    </div>
                </div>
                {/* Coluna 2 de categorias */}
                <div className='d-flex col-5 justify-content-between align-items-center flex-column'>
                    <div className='d-flex w-100 row'>
                        <CategoryButton imageName='Vetor_Bebida.png' 
                                        category='Bebidas' 
                                        onClick={() =>{
                                            
                                        }}/>
                    </div>
                    <div className='d-flex row w-100'>
                        <CategoryButton imageName='Vetor_Sorvete.png' 
                                        category='Sobremesas' 
                                        onClick={() =>{
                                            
                                        }}/>
                    </div>
                </div>
                <div className='d-flex col-1'/>      
            </div>
            {/* Setor dos botões limpar Carrinho e Pagar */}
            <div className='d-flex row'
                style={{height: '14vh', marginBottom:'1vh'}}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex col-1'/>
                    <CleanOrderButton emptyCart={props.emptyCart}/>
                    <PayButton redirectFunction={navigateToReview}/>
                    <div className='d-flex col-1'/>
                </div>
            </div>
        </div>
    )
}