import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Review.css';

export default function Review(props){

    useEffect(() => {
        //run after component mount
        //add automaticamente ao entrar na pagina 2 quantidades de um item pra teste do carrinho
        //REMOVER
        props.addItemToCart({'name': 'teste', 'id': '12jaflibu17b27b', 'price': 21.9, 'quantity': 2})
    },[])

    return(
        <div>
            <div className="top-bar top-bar-review d-flex row w-100 ">               
                <h1 className='title-page'>Revisão do Pedido</h1>
            </div>
            <p>
                Carrinho: {props.cart}
            </p>
        </div>
    )
}