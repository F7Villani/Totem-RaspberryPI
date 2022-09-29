import React from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Category(props){
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
            <div className='d-fluid row'
                style={{height: '15vh'}}>
                <footer className='d-fluid justify-content-between align-items-center'>

                </footer>
            </div>
        </div>
    )
}