import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import CleanOrderButton from '../components/CleanOrderButton/CleanOrderButton';
import PayButton from '../components/PayButton/PayButton';

export default function Category(props){

    const navigate = useNavigate()

    const navigateToReview = () => {
        navigate('/review')
    }

    return(
        <div className='d-flex w-100 h-100 row'>
            {/* Setor das categorias */}
            <div className='d-fluid row w-100'
                style={{height: '85vh'}}>
                <div className='d-fluid col-2'/>
                {/* Coluna 1 de categorias */}
                <div className='d-fluid col-4'>

                </div>
                {/* Coluna 2 de categorias */}
                <div className='d-fluid col-4'>

                </div>
                <div className='d-fluid col-2'/>      
            </div>
            {/* Setor dos botões limpar Carrinho e Pagar */}
            <div className='d-flex row'
                style={{height: '15vh'}}>
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