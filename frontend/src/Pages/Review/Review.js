import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CleanOrderButton from '../../components/CleanOrderButton/CleanOrderButton';
import PayButton from '../../components/PayButton/PayButton';

import './Review.css';
import BackButton from '../../components/BackButton/BackButton';

export default function Review(props){

    useEffect(() => {
        //run after component mount
        //add automaticamente ao entrar na pagina 2 quantidades de um item pra teste do carrinho
        //REMOVER
        props.addItemToCart({'name': 'teste', 'id': '12jaflibu17b27b', 'price': 21.9, 'quantity': 2})
    },[])

    const navigate = useNavigate();

    const navigateToItemCategory = () => {
        navigate('/category')
    };
    const navigateToPayment = () => {
        navigate('/payment')
    }

    return(
        <div>
            <div className="top-bar top-bar-review d-flex row w-100 ">               
                <h1 className='title-page'>Revisão do Pedido</h1>
            </div>

            <div className="row w-100 header-items align-items-start">
                <div className="col-6 "><h2>Item</h2></div>
                <div className="col-3"><h2>Preço</h2></div>
                <div className="col-3"><h2>Qtd</h2></div>
            </div>
            <p className='naoSeiArrumarIsso'>
                {props.cart}
            </p>
            {
                JSON.parse(props.cart).map((item, key) => (
                    <div className="row w-100 header-items align-items-start">
                        <div className="col-6 ">{item.name}</div>
                        <div className="col-3">{item.price}</div>
                        <div className="col-3">{item.quantity}</div>
                    </div>
                ))
            }
            <div className='d-flex row w-100'
                style={{height: '14vh', margin:'1px'}}>
                <div className='d-flex justify-content-between align-items-end'>
                    <div className='d-flex col-6'>
                        <BackButton redirectFunction={navigateToItemCategory}/>
                    </div>
                    <div className='d-flex col-6'>
                        <PayButton redirectFunction={navigateToPayment}/>
                    </div>
                </div>
            </div>
        </div>
    )
}