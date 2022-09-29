import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Review(props){

    useEffect(() => {
        //run after component mount
        //add automaticamente ao entrar na pagina 2 quantidades de um item pra teste do carrinho
        //REMOVER
        props.addItemToCart({'name': 'teste', 'id': '12jaflibu17b27b', 'price': 21.9, 'quantity': 2})
    },[])

    return(
        <div>
            <p>Review</p>
            <br/>
            <p>
                Carrinho: {props.cart}
            </p>
        </div>
    )
}